import React, { useEffect, useMemo, useState } from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import XLSX from 'xlsx'
import matchSorter from 'match-sorter'
import { ToastContainer, toast } from 'react-toastify'

import { FiMoreHorizontal } from 'react-icons/fi'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { MdMore, MdDelete } from 'react-icons/md'
import Layout from '@components/layout/Layout'
import TableComponent, { useAsyncDebounce } from '@components/Table'
import makeData from '@utils/helpers'
import Checkbox from '@components/Checkbox'
import Dropdown from '@components/Dropdown'
import Button from '@components/Button'
import UploadComponent from '@components/FileUpload'
import { getUsers, inviteUser } from '@utils/api'

const editableFields = ['firstName', 'lastName', 'email']

const headerSearch = () => {
  return (
    <div className="flex justify-start" style={{ width: '55%' }}>
      <p>an header search here</p>
    </div>
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateData(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return editableFields.includes(id) ? (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full px-2 bg-transparent focus:bg-white"
    />
  ) : (
    <div className="">{value}</div>
  )
}

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

// Define a UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

const sendInvite = (e, data) => {
  e.stopPropagation()
  inviteUser(data)
}

const IndexPage: NextPage = () => {
  const [data, setData] = useState([])
  // const [data, setData] = useState(() => makeData(6))
  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
        ],
      },
      {
        Header: 'Test Info',
        columns: [
          {
            Header: 'Invite Sent',
            accessor: 'inviteSent',
          },
          {
            Header: 'Test Sent',
            accessor: 'testSent',
          },
          {
            Header: 'Test Status',
            accessor: 'testStatus',
          },
        ],
      },
    ],
    []
  )
  const spring = React.useMemo(
    () => ({
      type: 'spring',
      damping: 50,
      stiffness: 100,
    }),
    []
  )
  const filterTypes = useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const getAndSetUsers = async () => {
    const users = await getUsers()
    // if (users) setData(users)
    console.log('usersss', users)
  }
  useEffect(() => {
    getAndSetUsers()
  }, [])

  const uploadDatabase = (file, type) => {
    switch (type) {
      case 'spreadsheet':
        //  var first_worksheet = workbook.Sheets[workbook.SheetNames[0]]
        // var data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 })

        // /* convert from array of arrays to workbook */
        // var worksheet = XLSX.utils.aoa_to_sheet(data)
        // var new_workbook = XLSX.utils.book_new()
        // XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS')
        const f = file.selectedFile[0]
        const reader = new FileReader()
        const stateData = data
        reader.onload = function (e) {
          const data = e.target.result
          const readedData = XLSX.read(data, { type: 'binary' })
          const wsname = readedData.SheetNames[0]
          const ws = readedData.Sheets[wsname]

          /* Convert array to json*/
          // const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 })
          const dataParse = XLSX.utils.sheet_to_json(ws, { raw: true })

          const fieldNames = [
            'Serial No',
            'firstName',
            'lastName',
            'email',
            'inviteSent',
            'testSent',
            'testStatus',
            'subRows',
          ]
          const newDataSet = dataParse.map((d) => {
            const pos = Object.keys(d)
            fieldNames.forEach((name, i) => {
              if (name !== 'Serial No') {
                d[name] = d[name] || d[pos[i]] || ''
                d[name] = String(d[name])
              }
              if (name === 'subRows') d[name] = undefined
            })
            return d
          })
          const update = newDataSet.concat(stateData)

          setData(update)
        }
        reader.readAsBinaryString(f)
        break

      default:
        break
    }
  }

  const deleteRecord = (row) => {
    const newData = data.filter((d) => d.email !== row.original.email)
    setData(newData)
  }

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our Filter UI
      Filter: DefaultColumnFilter,
      Cell: EditableCell,
    }),
    []
  )

  const renderTableSelect = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: 'selection',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllPageRowsSelectedProps }) => (
          <div>
            <Checkbox {...getToggleAllPageRowsSelectedProps()} />
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <Checkbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      ...columns,
      {
        id: 'deletion',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllPageRowsSelectedProps }) => <div></div>,
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div
            {...row.getToggleRowSelectedProps()}
            onClick={() => deleteRecord(row)}
            className="group"
          >
            <MdDelete
              {...row.getToggleRowSelectedProps()}
              className="opacity-50 group-hover:opacity-100 group-hover:hover:text-red-600"
            />
          </div>
        ),
      },
    ])
  }

  const renderTableHeader = (column) => {
    const header = column.render('Header')
    return <>{header}</>
  }
  const renderTableRow = (page, prepareRow) => {
    const renderTableCell = (cell) => {
      if (cell.column.id === 'inviteSent') {
        if (cell.row?.values?.inviteSent?.toLowerCase() === 'no')
          return (
            <div className="z-50 inline-flex items-center justify-center w-full h-full align-middle group">
              <span className="text-red-600">{cell.render('Cell')}</span>
              <span className="hidden align-middle group-focus:flex group-hover:flex align-center">
                <Dropdown
                  buttonLabel={
                    <FiMoreHorizontal className="flex self-center opacity-50" />
                  }
                  className="z-20 ml-4"
                >
                  <ul className="w-40 py-2 space-y-4 text-sm">
                    <li>
                      <span
                        className="cursor-pointer text-primary hover:underline"
                        title="components"
                        onClick={(e) => sendInvite(e, cell.row.values)}
                      >
                        <SiMinutemailer className="inline ml-6 mr-4" />
                        Send Invite
                      </span>
                    </li>
                    <li>
                      <hr className="dark:border-gray-700" />
                    </li>
                    <li className="cursor-not-allowed">
                      <span
                        className="text-primary hover:underline"
                        title="Typography"
                      >
                        <MdMore className="inline ml-6 mr-4 " />
                        More Options
                      </span>
                    </li>
                  </ul>
                </Dropdown>
              </span>
            </div>
          )
        else
          return (
            <div className="inline-flex items-center justify-center w-full align-middle group">
              <span className="text-green-600">{cell.render('Cell')}</span>
            </div>
          )
      }
      if (cell.column.id === 'testSent') {
        if (cell.row.values?.testSent?.toLowerCase() === 'no')
          return (
            <div className="inline-flex items-center justify-center w-full text-red-600">
              {cell.render('Cell')}
            </div>
          )
        else
          return (
            <div className="inline-flex items-center justify-center w-full text-green-600">
              {cell.render('Cell')}
            </div>
          )
      }
      if (cell.column.id === 'testStatus') {
        if (cell.row?.values?.testStatus?.toLowerCase() === 'pending')
          return (
            <div className="inline-flex items-center justify-center w-full text-yellow-700">
              {cell.render('Cell')}
            </div>
          )
        else
          return (
            <div className="inline-flex items-center justify-center w-full text-green-600">
              {cell.render('Cell')}
            </div>
          )
      }
      return (
        <div className="inline-flex items-center justify-center w-full ">
          {cell.render('Cell')}
        </div>
      )
    }
    return (
      <>
        {page.map((row, i1) => {
          prepareRow(row)
          return (
            <motion.tr
              {...row.getRowProps({
                layoutTransition: spring,
                exit: { opacity: 0, maxHeight: 0 },
              })}
              className={`${i1 % 2 ? '' : ''} text-center h-16`}
            >
              {row.cells.map((cell, i) => {
                return (
                  <motion.td
                    {...cell.getCellProps({
                      layoutTransition: spring,
                    })}
                    className="text-center"
                    // className={`${
                    //   i1 % 2 ? 'bg-gray-400 border-gray-400' : ''
                    // } h-16`}
                  >
                    {renderTableCell
                      ? renderTableCell(cell)
                      : cell.render('Cell')}
                  </motion.td>
                )
              })}
            </motion.tr>
          )
        })}
      </>
    )
  }

  const handleBatchActions = (controls) => {
    const { state: tableState, selectedFlatRows } = controls
    const { selectedRowIds } = tableState
    const selectedLen = Object.keys(selectedRowIds || {}).length

    const selectedMembers = selectedFlatRows.map((d) => d.original)
    const uninvitedMembers = selectedMembers.filter(
      (d) => d['testSent']?.toLowerCase() !== 'no'
    )
    const uninvitedLen = uninvitedMembers.length

    return (
      <div
        className={`flex ${
          selectedLen ? 'justify-between' : 'justify-end'
        } w-full mb-2`}
      >
        {selectedLen > 0 && (
          <>
            <p>You have selected {selectedLen} members</p>
            {uninvitedLen > 0 && (
              <div>
                <Button onClick={(e) => sendInvite(e, uninvitedMembers)}>
                  Send Invitation to {uninvitedLen} members
                </Button>
              </div>
            )}
          </>
        )}
        {!selectedLen && (
          <>
            <UploadComponent
              allowedExtensions={[
                'xls',
                'xlsx',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              ]}
              // autoUpload={true}
              render={(el: HTMLElement | null) => {
                return (
                  <span
                    className="flex justify-end w-full px-4 py-2 border cursor-pointer hover:text-primary-lighter hover:border-primary-darker text-primary"
                    onClick={(e) => {
                      e.preventDefault()
                      el && el.click()
                    }}
                  >
                    <FaCloudUploadAlt className="w-6 h-6 mr-2" />
                    Upload SpreadSheet
                  </span>
                )
              }}
              uploadHandler={(data: any, state: any, cb: any) => {
                uploadDatabase(state, 'spreadsheet')
              }}
            />
            {/* <Button
              type="secondary"
              className="self-end"
              onClick={(e) =>
                uploadDatabase(e, uninvitedMembers, 'spreadsheet')
              }
            >
              Upload SpreadSheet
            </Button> */}
          </>
        )}
      </div>
    )
  }

  return (
    <Layout
      title="Your Awesome App"
      className="container max-w-5xl py-8 overflow-auto"
      header={headerSearch()}
    >
      {/* <ToastContainer /> */}

      {/* <h1 className="mb-4 text-3xl font-black dark:text-gray-100">Welcome</h1> */}
      <p className="mb-4 text-lg font-light">
        Demo spreadsheet upload and email list system.
      </p>
      <div>
        <TableComponent
          columns={columns}
          data={data}
          setData={setData}
          tableClassName="w-full"
          filterTypes={filterTypes}
          defaultColumn={defaultColumn}
          globalFilter={{ use: false, Component: GlobalFilter }}
          renderHeader={renderTableHeader}
          // renderFilter= {(column: unknown) => JSX.Element}
          // renderTableBody={renderTableBody}
          renderTableRow={renderTableRow}
          // renderTableCell= {(cell: unknown) => JSX.Element}
          handleTableControls={{ jsx: handleBatchActions }}
          customHook={renderTableSelect}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
