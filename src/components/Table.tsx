import React, { useEffect, useState } from 'react'
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  useFilters,
  useColumnOrder,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'
import { motion, AnimatePresence } from 'framer-motion'
import matchSorter from 'match-sorter'
import styled from 'styled-components'
import { isEmpty } from '@utils/helpers'

export interface Props {
  className?: string | Record<string, unknown>
  ordered?: boolean
  item?: boolean
}

export interface gFilterProps {
  preGlobalFilteredRows: unknown
  globalFilter: unknown
  setGlobalFilter: unknown
}

export type gFilterState = unknown

export type filterColumnProps = unknown

export type FilterType = {
  fuzzyText: unknown
  text: (rows: unknown, id: unknown, filterValue: unknown) => unknown
}

export type DefaultColumn = {
  Filter?: ({
    column: { filterValue, preFilteredRows, setFilter },
  }: {
    column: {
      filterValue: unknown
      preFilteredRows: unknown
      setFilter: unknown
    }
  }) => JSX.Element
  Cell?: ({
    value: initialValue,
    row: { index },
    column,
    updateData,
  }: {
    value: unknown
    row: {
      index: unknown
    }
    column: unknown
    updateData: (index, id, value) => unknown
  }) => unknown
}

export type GlobalFilter = {
  use: boolean
  pos: 'below' | 'above'
  Component: ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) => JSX.Element
}

export interface TableOptions {
  tableClassName?: string
  filterTypes?: FilterType
  defaultColumn?: DefaultColumn
  globalFilter?: GlobalFilter
  renderHeader?: (header: unknown) => JSX.Element
  renderFilter?: (column: unknown) => JSX.Element
  renderTableBody?: (column: unknown) => JSX.Element
  renderTableRow?: (row: unknown, prepareTableRow: unknown) => JSX.Element
  renderExtraTableTd?: (controls: unknown) => JSX.Element
  renderTableCell?: (cell: unknown) => JSX.Element
  handleTableControls?: {
    beforeTableRender?: (controls: unknown) => JSX.Element
    jsx?: (controls) => JSX.Element
  }
  customHook?: (hooks: unknown) => unknown
}

const Styles = styled.div`
  padding: 1rem;

  table {
    /* border-spacing: 0; */
    /* border: 1px solid black; */
    border-collapse: separate;
    border-style: 1em;
    border-spacing: 1em;
    /* border-spacing: 0 1em; */

    thead tr {
      :first-child {
        display: none;
      }
      /* border: none !important; */
      /* border-bottom: 2px solid; */
      background: none !important;
      border-radius: none !important;
    }

    tbody {
      tr {
        border-radius: 1rem;
        padding: 1.5rem;

        margin: 0.5rem 0;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.57), 0 2px 4px rgba(0, 0, 0, 0.05);
        transition: transform 0.5s -webkit-transform 0.5s;
        :last-child {
          border-radius: 1rem;
          td {
            /* border-bottom: 0; */
          }
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      /* border-bottom: 1px solid black;
      border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }

      /* input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      } */
    }

    .pagination {
      padding: 0.5rem;
    }
  }
`

function TableComponent({
  columns,
  data,
  setData,
  loading,
  tableClassName,
  tableWrapper,
  ...rest
}: {
  columns: {
    Header?: string
    columns: {
      Header: string
      accessor: string
      Cell?: unknown
    }[]
  }[]
  data: Record<string, unknown> | unknown[]
  loading?: boolean
  tableWrapper?: {
    use: boolean
    wrapper: unknown
    props?: Record<string, unknown>
  }
  setData: React.Dispatch<unknown>
} & TableOptions) {
  const [skipPageReset, setSkipPageReset] = useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  const tableOptions: TableOptions = {}

  Array.from([
    'renderHeader',
    'renderFilter',
    'renderTableBody',
    'renderTableRow',
    'renderExtraTableTd',
    'renderTableCell',
    'defaultColumn',
    'globalFilter',
    'handleTableControls',
    'customHook',
  ]).forEach((option) => {
    if (rest[option]) {
      tableOptions[option] = rest[option]
    }
  })

  let TableWrapper = Styles
  if (tableWrapper.use) {
    TableWrapper = tableWrapper.wrapper
  }

  return (
    <TableWrapper {...(tableWrapper.use && { ...tableWrapper.props })}>
      <Table
        tableClassName={tableClassName}
        columns={columns}
        loading={loading}
        data={data}
        updateData={updateData}
        skipPageReset={skipPageReset}
        options={{ ...tableOptions }}
      />
    </TableWrapper>
  )
}

export default TableComponent

// Be sure to pass our updateData and the skipPageReset option
function Table({
  columns,
  data,
  updateData,
  skipPageReset,
  loading,
  options,
  tableClassName,
}) {
  const {
    filterTypes,
    defaultColumn,
    globalFilter,
    renderHeader,
    renderFilter,
    // renderTableBody,
    renderTableRow,
    renderExtraTableTd,
    renderTableCell,
    handleTableControls,
    customHook,
  }: TableOptions = options || {}

  let extraHook = (hooks) => {
    hooks.visibleColumns.push((columns) => [...columns])
  }
  if (customHook) extraHook = customHook

  const hookOptions: {
    filterTypes?: FilterType
    defaultColumn?: DefaultColumn
  } = {}

  if (filterTypes) hookOptions.filterTypes = filterTypes
  if (defaultColumn) hookOptions.defaultColumn = defaultColumn
  else hookOptions.defaultColumn = {}

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    // setGlobalFilteredRows,
    setPageSize,
    selectedFlatRows,
    visibleColumns,
    preGlobalFilteredRows,
    // setColumnOrder,
    state,
  } = useTable(
    {
      columns,
      data,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      updateData,
      ...hookOptions,
    },
    useColumnOrder,
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    extraHook
  )

  const { pageIndex, pageSize, selectedRowIds } = state

  const spring = React.useMemo(
    () => ({
      type: 'spring',
      damping: 50,
      stiffness: 100,
    }),
    []
  )

  const controls = {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    // setGlobalFilteredRows,
    setPageSize,
    selectedFlatRows,
    visibleColumns,
    preGlobalFilteredRows,
    // setColumnOrder,
    state,
  }

  if (handleTableControls && handleTableControls.beforeTableRender) {
    return handleTableControls.beforeTableRender(controls)
  }

  // Render the UI for your table
  return (
    <>
      {handleTableControls &&
        handleTableControls.jsx &&
        handleTableControls.jsx(controls)}
      <table {...getTableProps()} className={tableClassName || ''}>
        <thead>
          {globalFilter?.use &&
            globalFilter?.pos === 'above' &&
            data.length > 10 && (
              <tr>
                <th
                  colSpan={visibleColumns.length}
                  style={{
                    textAlign: 'left',
                  }}
                >
                  {/* @ts-ignore */}
                  <globalFilter.Component
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </th>
              </tr>
            )}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <motion.th
                  {...column.getHeaderProps({
                    layoutTransition: spring,
                    style: {},
                  })}
                >
                  <div {...column.getSortByToggleProps()}>
                    {renderHeader ? (
                      renderHeader(column)
                    ) : (
                      <>
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                      </>
                    )}
                  </div>
                  <div>
                    {column.canFilter && filterTypes
                      ? renderFilter
                        ? renderFilter(column)
                        : column.render('Filter')
                      : null}
                  </div>
                </motion.th>
              ))}
            </tr>
          ))}
          {globalFilter?.use &&
            globalFilter?.pos === 'below' &&
            data.length > 10 && (
              <tr>
                <th
                  colSpan={visibleColumns.length}
                  style={{
                    textAlign: 'left',
                  }}
                >
                  {/* @ts-ignore */}
                  <globalFilter.Component
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </th>
              </tr>
            )}
          {isEmpty(data) && (
            <tr>
              <th
                colSpan={visibleColumns.length}
                className="w-full h-48 my-4 text-base text-center hover:border-red-600 nothing-to-show-th"
                style={{
                  fontWeight: 'normal',
                  textAlign: 'center',
                  border: '1px dashed darkgreen',
                }}
              >
                {loading ? (
                  <div className="spinner"></div>
                ) : (
                  <p className="text-xl text-red-800 font-base">
                    Nothing to show
                  </p>
                )}
              </th>
            </tr>
          )}
        </thead>
        <tbody {...getTableBodyProps()}>
          <AnimatePresence>
            {renderTableRow
              ? renderTableRow(page, prepareRow)
              : page.map((row, i) => {
                  prepareRow(row)
                  return (
                    <motion.tr
                      {...row.getRowProps({
                        layoutTransition: spring,
                        exit: { opacity: 0, maxHeight: 0 },
                      })}
                    >
                      {row.cells.map((cell, i) => {
                        return (
                          <motion.td
                            {...cell.getCellProps({
                              layoutTransition: spring,
                            })}
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
          </AnimatePresence>
          {renderExtraTableTd && renderExtraTableTd(controls)}
        </tbody>
      </table>
      <div className="mt-2 pagination">
        {data.length > 10 && (
          <>
            <button
              onClick={() => gotoPage(0)}
              className={`${!canPreviousPage ? 'opacity-25' : ''}`}
              disabled={!canPreviousPage}
            >
              {'<<'}
            </button>{' '}
            <button
              onClick={() => previousPage()}
              className={`${!canPreviousPage ? 'opacity-25' : ''}`}
              disabled={!canPreviousPage}
            >
              {'<'}
            </button>{' '}
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className={`${!canNextPage ? 'opacity-25' : ''}`}
            >
              {'>'}
            </button>{' '}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className={`${!canNextPage ? 'opacity-25' : ''}`}
            >
              {'>>'}
            </button>
          </>
        )}
        {data?.length > 10 && (
          <>
            <span className="text-sm">
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <span>
              | Go to page:{' '}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
                style={{
                  width: '100px',
                }}
              />
            </span>

            <select
              value={pageSize}
              className="px-2 mx-4 text-sm"
              onChange={(e) => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    </>
  )
}

export { useAsyncDebounce, matchSorter }
