webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/layout/Layout */ "./src/components/layout/Layout.tsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/Table */ "./src/components/Table.tsx");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @utils/helpers */ "./src/utils/helpers.ts");
/* harmony import */ var _components_Checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/Checkbox */ "./src/components/Checkbox.tsx");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/Dropdown */ "./src/components/Dropdown.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @components/Button */ "./src/components/Button.tsx");
/* harmony import */ var _components_FileUpload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @components/FileUpload */ "./src/components/FileUpload.tsx");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @utils/api */ "./src/utils/api.ts");






var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  table {\n    /* border-spacing: 0; */\n    /* border: 1px solid black; */\n    border-collapse: separate;\n    border-style: 1em;\n    border-spacing: 1em;\n    /* border-spacing: 0 1em; */\n\n    thead tr {\n      :nth-child(1) {\n        display: none;\n      }\n      /* border: none !important; */\n      /* border-bottom: 2px solid; */\n      background: none !important;\n      border-radius: none !important;\n    }\n\n    tbody {\n      tr {\n        border-radius: 1rem;\n        padding: 1.5rem;\n\n        margin: 0.5rem 0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.57), 0 2px 4px rgba(0, 0, 0, 0.05);\n        transition: transform 0.5s -webkit-transform 0.5s;\n        :last-child {\n          border-radius: 1rem;\n          td {\n            /* border-bottom: 0; */\n          }\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      /* border-bottom: 1px solid black;\n      border-right: 1px solid black; */\n\n      :last-child {\n        border-right: 0;\n      }\n\n      /* input {\n        font-size: 1rem;\n        padding: 0;\n        margin: 0;\n        border: 0;\n      } */\n    }\n\n    .pagination {\n      padding: 0.5rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable @typescript-eslint/no-explicit-any */



















var editableFields = ['firstName', 'lastName', 'email'];

var headerSearch = function headerSearch() {
  return __jsx("div", {
    className: "flex justify-start",
    style: {
      width: '55%'
    }
  }, __jsx("p", null, "an header search here"));
};

var tableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].form(_templateObject());

function fuzzyTextFilterFn(rows, id, filterValue) {
  return Object(_components_Table__WEBPACK_IMPORTED_MODULE_17__["matchSorter"])(rows, filterValue, {
    keys: [function (row) {
      return row.values[id];
    }]
  });
} // Let the table remove the filter if the string is empty


fuzzyTextFilterFn.autoRemove = function (val) {
  return !val;
}; // Create an editable cell renderer


var EditableCell = function EditableCell(_ref) {
  _s();

  var initialValue = _ref.value,
      index = _ref.row.index,
      id = _ref.column.id,
      updateData = _ref.updateData;

  // We need to keep and update the state of the cell normally
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = function onChange(e) {
    setValue(e.target.value);
  }; // We'll only update the external data when the input is blurred


  var onBlur = function onBlur() {
    updateData(index, id, value);
  }; // If the initialValue is changed external, sync it up with our state


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setValue(initialValue);
  }, [initialValue]);
  return editableFields.includes(id) ? __jsx("input", {
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    className: "w-full px-2 bg-transparent focus:bg-white"
  }) : __jsx("div", {
    className: ""
  }, value);
}; // Define a default UI for filtering


_s(EditableCell, "tWiMN+R1KrlPc+I/v9D+hnPBFtc=");

_c = EditableCell;

function GlobalFilter(_ref2) {
  _s2();

  var preGlobalFilteredRows = _ref2.preGlobalFilteredRows,
      globalFilter = _ref2.globalFilter,
      setGlobalFilter = _ref2.setGlobalFilter;
  var count = preGlobalFilteredRows.length;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(globalFilter),
      value = _useState2[0],
      setValue = _useState2[1];

  var _onChange = Object(_components_Table__WEBPACK_IMPORTED_MODULE_17__["useAsyncDebounce"])(function (value) {
    setGlobalFilter(value || undefined);
  }, 200);

  return __jsx("span", {
    className: "mr-4 text-xl"
  }, "Search:", ' ', __jsx("input", {
    value: value || '',
    onChange: function onChange(e) {
      setValue(e.target.value);

      _onChange(e.target.value);
    },
    className: "w-2/5 px-4 py-1 radius-input",
    placeholder: "".concat(count, " records..."),
    style: {
      fontSize: '1.1rem',
      border: '0'
    }
  }));
} // Define a UI for filtering


_s2(GlobalFilter, "u76gItWTPW4jhTYSCcNG7/LfbyA=", false, function () {
  return [_components_Table__WEBPACK_IMPORTED_MODULE_17__["useAsyncDebounce"]];
});

_c2 = GlobalFilter;

function DefaultColumnFilter(_ref3) {
  var _ref3$column = _ref3.column,
      filterValue = _ref3$column.filterValue,
      preFilteredRows = _ref3$column.preFilteredRows,
      setFilter = _ref3$column.setFilter;
  var count = preFilteredRows.length;
  return __jsx("input", {
    value: filterValue || '',
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: "Search ".concat(count, " records...")
  });
}

_c3 = DefaultColumnFilter;

var IndexPage = function IndexPage() {
  _s3();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      data = _useState3[0],
      setData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      pageLoading = _useState4[0],
      setPageLoading = _useState4[1]; // const [data, setData] = useState(() => makeData(6))


  var columns = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return [{
      Header: 'Table',
      columns: [{
        Header: 'First Name',
        accessor: 'firstName'
      }, {
        Header: 'Last Name',
        accessor: 'lastName'
      }, {
        Header: 'Email',
        accessor: 'email'
      }]
    }, {
      Header: 'Test Info',
      columns: [{
        Header: 'Invite Sent',
        accessor: 'inviteSent'
      }, {
        Header: 'Test Sent',
        accessor: 'testSent'
      }, {
        Header: 'Test Status',
        accessor: 'testStatus'
      }]
    }];
  }, []);
  var spring = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(function () {
    return {
      type: 'spring',
      damping: 50,
      stiffness: 100
    };
  }, []);
  var filterTypes = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: function text(rows, id, filterValue) {
        return rows.filter(function (row) {
          var rowValue = row.values[id];
          return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
        });
      }
    };
  }, []);

  var sendInvite = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e, xdata) {
      var resp, currentData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_23__["inviteUser"])([xdata]);

            case 3:
              resp = _context.sent;

              if (resp) {
                currentData = data.map(function (d) {
                  if (d.email === xdata.email) d.inviteSent = 'Yes';
                  return d;
                });
                react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].success('User invited successfully');
                setData(currentData);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendInvite(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getAndSetUsers = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var dataX, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setPageLoading(true);
              _context2.next = 3;
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_23__["getUsers"])();

            case 3:
              dataX = _context2.sent;
              data = dataX === null || dataX === void 0 ? void 0 : dataX.data;

              if (!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_18__["isEmpty"])(data)) {
                setData(Array.from(data));
              }

              setPageLoading(false);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getAndSetUsers() {
      return _ref5.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getAndSetUsers();
  }, []);

  var uploadDatabase = function uploadDatabase(file, type) {
    switch (type) {
      case 'spreadsheet':
        //  var first_worksheet = workbook.Sheets[workbook.SheetNames[0]]
        // var data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 })
        // /* convert from array of arrays to workbook */
        // var worksheet = XLSX.utils.aoa_to_sheet(data)
        // var new_workbook = XLSX.utils.book_new()
        // XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS')
        var f = file.selectedFile[0];
        var reader = new FileReader();
        var stateData = data;

        reader.onload = function (e) {
          var data = e.target.result;
          var readedData = xlsx__WEBPACK_IMPORTED_MODULE_7___default.a.read(data, {
            type: 'binary'
          });
          var wsname = readedData.SheetNames[0];
          var ws = readedData.Sheets[wsname];
          /* Convert array to json*/
          // const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 })

          var dataParse = xlsx__WEBPACK_IMPORTED_MODULE_7___default.a.utils.sheet_to_json(ws, {
            raw: true
          });
          var fieldNames = ['Serial No', 'firstName', 'lastName', 'email', 'inviteSent', 'testSent', 'testStatus', 'subRows'];
          var newDataSet = dataParse.map(function (d) {
            var pos = Object.keys(d);
            fieldNames.forEach(function (name, i) {
              if (name !== 'Serial No') {
                d[name] = d[name] || d[pos[i]] || '';
                d[name] = String(d[name]);
              }

              if (name === 'subRows') d[name] = undefined;
            });
            return d;
          });
          var update = newDataSet.concat(stateData);
          setData(update);
        };

        reader.readAsBinaryString(f);
        break;

      default:
        break;
    }
  };

  var deleteRecord = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(row) {
      var newData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              newData = data.filter(function (d) {
                return d.email !== row.original.email;
              });
              _context3.next = 3;
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_23__["deleteUser"])(row.original);

            case 3:
              react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].success('Deleted Successfully');
              setData(newData);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteRecord(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  var defaultColumn = react__WEBPACK_IMPORTED_MODULE_5___default.a.useMemo(function () {
    return {
      // Let's set up our Filter UI
      Filter: DefaultColumnFilter,
      Cell: EditableCell
    };
  }, []);

  var renderTableHooks = function renderTableHooks(hooks) {
    hooks.visibleColumns.push(function (columns) {
      return [// Let's make a column for selection
      {
        id: 'selection',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: function Header(_ref7) {
          var getToggleAllPageRowsSelectedProps = _ref7.getToggleAllPageRowsSelectedProps;
          return __jsx("div", null, __jsx(_components_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], getToggleAllPageRowsSelectedProps()));
        },
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: function Cell(_ref8) {
          var row = _ref8.row;
          return __jsx("div", null, __jsx(_components_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], row.getToggleRowSelectedProps()));
        }
      }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(columns), [{
        id: 'deletion',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: function Header(_ref9) {
          var getToggleAllPageRowsSelectedProps = _ref9.getToggleAllPageRowsSelectedProps;
          return __jsx("div", null);
        },
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: function Cell(_ref10) {
          var row = _ref10.row;
          return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getToggleRowSelectedProps(), {
            onClick: function onClick() {
              return deleteRecord(row);
            },
            className: "group"
          }), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_15__["MdDelete"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getToggleRowSelectedProps(), {
            className: "opacity-50 group-hover:opacity-100 group-hover:hover:text-red-600"
          })));
        }
      }]);
    });
  };

  var renderTableHeader = function renderTableHeader(column) {
    var header = column.render('Header');
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, header);
  };

  var renderTableRow = function renderTableRow(page, prepareRow) {
    var renderTableCell = function renderTableCell(cell) {
      if (cell.column.id === 'inviteSent') {
        var _cell$row, _cell$row$values, _cell$row$values$invi;

        if (((_cell$row = cell.row) === null || _cell$row === void 0 ? void 0 : (_cell$row$values = _cell$row.values) === null || _cell$row$values === void 0 ? void 0 : (_cell$row$values$invi = _cell$row$values.inviteSent) === null || _cell$row$values$invi === void 0 ? void 0 : _cell$row$values$invi.toLowerCase()) === 'no') return __jsx("div", {
          className: "z-50 inline-flex items-center justify-center w-full h-full align-middle group"
        }, __jsx("span", {
          className: "text-red-600"
        }, cell.render('Cell')), __jsx("span", {
          className: "align-middle group-focus:flex group-hover:flex align-center"
        }, __jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_20__["default"], {
          className: "z-20 hidden ml-4 group-hover:flex",
          buttonLabel: __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_12__["FiMoreHorizontal"], {
            className: "flex self-center opacity-50"
          })
        }, __jsx("ul", {
          className: "w-40 py-2 space-y-4 text-sm"
        }, __jsx("li", null, __jsx("span", {
          className: "cursor-pointer text-primary hover:underline",
          title: "components",
          onClick: function onClick(e) {
            e.stopPropagation();
            sendInvite(e, cell.row.values);
          }
        }, __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_14__["SiMinutemailer"], {
          className: "inline ml-6 mr-4"
        }), "Send Invite")), __jsx("li", null, __jsx("hr", {
          className: "dark:border-gray-700"
        })), __jsx("li", {
          className: "cursor-not-allowed"
        }, __jsx("span", {
          className: "text-primary hover:underline",
          title: "Typography"
        }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_15__["MdMore"], {
          className: "inline ml-6 mr-4 "
        }), "More Options"))))));else return __jsx("div", {
          className: "inline-flex items-center justify-center w-full align-middle group"
        }, __jsx("span", {
          className: "text-green-600"
        }, cell.render('Cell')));
      }

      if (cell.column.id === 'testSent') {
        var _cell$row$values2, _cell$row$values2$tes;

        if (((_cell$row$values2 = cell.row.values) === null || _cell$row$values2 === void 0 ? void 0 : (_cell$row$values2$tes = _cell$row$values2.testSent) === null || _cell$row$values2$tes === void 0 ? void 0 : _cell$row$values2$tes.toLowerCase()) === 'no') return __jsx("div", {
          className: "inline-flex items-center justify-center w-full text-red-600"
        }, cell.render('Cell'));else return __jsx("div", {
          className: "inline-flex items-center justify-center w-full text-green-600"
        }, cell.render('Cell'));
      }

      if (cell.column.id === 'testStatus') {
        var _cell$row2, _cell$row2$values, _cell$row2$values$tes;

        if (((_cell$row2 = cell.row) === null || _cell$row2 === void 0 ? void 0 : (_cell$row2$values = _cell$row2.values) === null || _cell$row2$values === void 0 ? void 0 : (_cell$row2$values$tes = _cell$row2$values.testStatus) === null || _cell$row2$values$tes === void 0 ? void 0 : _cell$row2$values$tes.toLowerCase()) === 'pending') return __jsx("div", {
          className: "inline-flex items-center justify-center w-full text-yellow-700"
        }, cell.render('Cell'));else return __jsx("div", {
          className: "inline-flex items-center justify-center w-full text-green-600"
        }, cell.render('Cell'));
      }

      return __jsx("div", {
        className: "inline-flex items-center justify-center w-full "
      }, cell.render('Cell'));
    };

    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, page.map(function (row, i1) {
      prepareRow(row);
      return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].tr, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps({
        layoutTransition: spring,
        exit: {
          opacity: 0,
          maxHeight: 0
        }
      }), {
        className: "".concat(i1 % 2 ? '' : '', " text-center h-16")
      }), row.cells.map(function (cell, i) {
        return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].td, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps({
          layoutTransition: spring
        }), {
          className: "text-center" // className={`${
          //   i1 % 2 ? 'bg-gray-400 border-gray-400' : ''
          // } h-16`}

        }), renderTableCell ? renderTableCell(cell) : cell.render('Cell'));
      }));
    }));
  };

  var _renderExtraTableTd = function renderExtraTableTd(controls, formikProps) {
    var visibleColumns = controls.visibleColumns;
    var values = formikProps.values,
        errors = formikProps.errors,
        touched = formikProps.touched,
        handleChange = formikProps.handleChange,
        handleBlur = formikProps.handleBlur,
        isSubmitting = formikProps.isSubmitting;
    return __jsx("tr", {
      role: "row",
      className: "h-16 elevation-3"
    }, __jsx("td", {
      role: "cell",
      className: "text-center"
    }, "\xA0"), __jsx("td", {
      role: "cell",
      className: "text-right"
    }, __jsx("div", {
      className: "flex flex-col items-start"
    }, __jsx("input", {
      value: values.fName,
      name: "fName",
      id: "fName",
      placeholder: 'First Name',
      className: "h-8 px-2 radius-input hover:border-primary",
      onBlur: handleBlur,
      onChange: handleChange
    }), __jsx("span", null, errors.fName && touched.fName && __jsx("p", {
      className: "text-xs text-left text-red-600"
    }, errors.fName)))), __jsx("td", {
      role: "cell",
      className: "text-right"
    }, __jsx("div", {
      className: "flex flex-col items-start"
    }, __jsx("input", {
      value: values.lName,
      name: "lName",
      id: "lName",
      placeholder: 'Last Name',
      className: "h-8 px-2 radius-input hover:border-primary",
      onChange: handleChange,
      onBlur: handleBlur
    }), __jsx("span", null, errors.lName && touched.lName && __jsx("p", {
      className: "text-xs text-left text-red-600"
    }, errors.lName)))), __jsx("td", {
      role: "cell",
      className: "text-right",
      placeholder: 'Last Name'
    }, __jsx("div", {
      className: "flex flex-col items-start"
    }, __jsx("input", {
      value: values.email,
      id: "email",
      name: "email",
      placeholder: 'Email',
      className: "h-8 px-2 radius-input hover:border-primary",
      onChange: handleChange,
      onBlur: handleBlur
    }), __jsx("span", null, errors.email && touched.email && __jsx("p", {
      className: "text-xs text-left text-red-600"
    }, errors.email)))), __jsx("td", {
      role: "cell",
      className: "w-full text-right",
      colSpan: visibleColumns.length - 4
    }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
      type: "primary",
      htmlFor: "submit",
      disabled: isSubmitting
    }, "Add new")));
  };

  var handleBatchActions = function handleBatchActions(controls) {
    var tableState = controls.state,
        selectedFlatRows = controls.selectedFlatRows;
    var selectedRowIds = tableState.selectedRowIds;
    var selectedLen = Object.keys(selectedRowIds || {}).length;
    var selectedMembers = selectedFlatRows.map(function (d) {
      return d.original;
    });
    var uninvitedMembers = selectedMembers.filter(function (d) {
      var _d$testSent;

      return ((_d$testSent = d['testSent']) === null || _d$testSent === void 0 ? void 0 : _d$testSent.toLowerCase()) !== 'no';
    });
    var uninvitedLen = uninvitedMembers.length;
    return __jsx("div", {
      className: "flex ".concat(selectedLen ? 'justify-between' : 'justify-end', " w-full mb-2")
    }, selectedLen > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("p", null, "You have selected ", selectedLen, " members"), uninvitedLen > 0 && __jsx("div", null, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
      onClick: function onClick(e) {
        e.stopPropagation();
        sendInvite(e, uninvitedMembers);
      }
    }, "Send Invitation to ", uninvitedLen, " members"))), !selectedLen && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_components_FileUpload__WEBPACK_IMPORTED_MODULE_22__["default"], {
      allowedExtensions: ['xls', 'xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'] // autoUpload={true}
      // render={(el: HTMLElement | null) => {
      ,
      render: function render(el) {
        return __jsx("span", {
          className: "flex justify-end w-full px-4 py-2 border cursor-pointer hover:text-primary-lighter hover:border-primary-darker text-primary",
          onClick: function onClick(e) {
            e.preventDefault();
            el && el.click();
          }
        }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaCloudUploadAlt"], {
          className: "w-6 h-6 mr-2"
        }), "Upload SpreadSheet");
      },
      uploadHandler: function uploadHandler(data, state, cb) {
        uploadDatabase(state, 'spreadsheet');
      }
    })));
  };

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref11 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(data, cb) {
      var payload, resp;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = {};
              payload.firstName = data.fName;
              payload.lastName = data.lName;
              payload.email = data.email;
              payload.inviteSent = 'No';
              payload.testSent = 'No';
              payload.testStatus = 'NA';
              _context4.next = 9;
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_23__["inviteUser"])([payload]);

            case 9:
              resp = _context4.sent;

              if (resp) {
                cb.resetForm();
                react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].success('New data added');
                setData(resp.data);
              }

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleFormSubmit(_x4, _x5) {
      return _ref11.apply(this, arguments);
    };
  }();

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: "Your Awesome App",
    className: "container max-w-6xl py-8 overflow-auto",
    header: headerSearch()
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__["ToastContainer"], null), __jsx("p", {
    className: "mb-4 text-lg font-bolder"
  }, "Demo spreadsheet upload and email list system."), __jsx("div", null, __jsx(formik__WEBPACK_IMPORTED_MODULE_9__["Formik"], {
    initialValues: {
      fName: '',
      lName: '',
      email: ''
    },
    onSubmit: handleFormSubmit,
    validateOnBlur: false,
    validateOnMount: false,
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_10__["object"]({
      fName: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().min(3, 'Must contain 3 characters or more').required('First Name is required'),
      lName: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().min(3, 'Must contain 3 characters or more').required('Last Name is required'),
      email: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().email('Invalid email address').required('Please provide the email')
    })
  }, function (formikProps) {
    return __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_17__["default"], {
      columns: columns,
      data: data,
      setData: setData,
      tableClassName: "w-full",
      filterTypes: filterTypes,
      defaultColumn: defaultColumn,
      globalFilter: {
        use: true,
        Component: GlobalFilter,
        pos: 'below'
      },
      renderHeader: renderTableHeader // renderFilter= {(column: unknown) => JSX.Element}
      // renderTableBody={renderTableBody}
      ,
      renderTableRow: renderTableRow,
      renderExtraTableTd: function renderExtraTableTd(controls) {
        return _renderExtraTableTd(controls, formikProps);
      },
      loading: pageLoading // renderTableCell= {(cell: unknown) => JSX.Element}
      ,
      handleTableControls: {
        jsx: handleBatchActions
      },
      tableWrapper: {
        use: true,
        wrapper: tableWrapper,
        props: {
          onSubmit: formikProps.handleSubmit
        }
      },
      customHook: renderTableHooks
    });
  })));
};

_s3(IndexPage, "F1ixgc7F0mwWPOU7R0GVlhts4P0=");

_c4 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "EditableCell");
$RefreshReg$(_c2, "GlobalFilter");
$RefreshReg$(_c3, "DefaultColumnFilter");
$RefreshReg$(_c4, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImVkaXRhYmxlRmllbGRzIiwiaGVhZGVyU2VhcmNoIiwid2lkdGgiLCJ0YWJsZVdyYXBwZXIiLCJzdHlsZWQiLCJmb3JtIiwiZnV6enlUZXh0RmlsdGVyRm4iLCJyb3dzIiwiaWQiLCJmaWx0ZXJWYWx1ZSIsIm1hdGNoU29ydGVyIiwia2V5cyIsInJvdyIsInZhbHVlcyIsImF1dG9SZW1vdmUiLCJ2YWwiLCJFZGl0YWJsZUNlbGwiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsImluZGV4IiwiY29sdW1uIiwidXBkYXRlRGF0YSIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkJsdXIiLCJ1c2VFZmZlY3QiLCJpbmNsdWRlcyIsIkdsb2JhbEZpbHRlciIsInByZUdsb2JhbEZpbHRlcmVkUm93cyIsImdsb2JhbEZpbHRlciIsInNldEdsb2JhbEZpbHRlciIsImNvdW50IiwibGVuZ3RoIiwidXNlQXN5bmNEZWJvdW5jZSIsInVuZGVmaW5lZCIsImZvbnRTaXplIiwiYm9yZGVyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsInByZUZpbHRlcmVkUm93cyIsInNldEZpbHRlciIsIkluZGV4UGFnZSIsImRhdGEiLCJzZXREYXRhIiwicGFnZUxvYWRpbmciLCJzZXRQYWdlTG9hZGluZyIsImNvbHVtbnMiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzcHJpbmciLCJSZWFjdCIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwiZmlsdGVyVHlwZXMiLCJmdXp6eVRleHQiLCJ0ZXh0IiwiZmlsdGVyIiwicm93VmFsdWUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJzZW5kSW52aXRlIiwieGRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImludml0ZVVzZXIiLCJyZXNwIiwiY3VycmVudERhdGEiLCJtYXAiLCJkIiwiZW1haWwiLCJpbnZpdGVTZW50IiwidG9hc3QiLCJzdWNjZXNzIiwiZ2V0QW5kU2V0VXNlcnMiLCJnZXRVc2VycyIsImRhdGFYIiwiaXNFbXB0eSIsIkFycmF5IiwiZnJvbSIsInVwbG9hZERhdGFiYXNlIiwiZmlsZSIsImYiLCJzZWxlY3RlZEZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwic3RhdGVEYXRhIiwib25sb2FkIiwicmVzdWx0IiwicmVhZGVkRGF0YSIsIlhMU1giLCJyZWFkIiwid3NuYW1lIiwiU2hlZXROYW1lcyIsIndzIiwiU2hlZXRzIiwiZGF0YVBhcnNlIiwidXRpbHMiLCJzaGVldF90b19qc29uIiwicmF3IiwiZmllbGROYW1lcyIsIm5ld0RhdGFTZXQiLCJwb3MiLCJPYmplY3QiLCJmb3JFYWNoIiwibmFtZSIsImkiLCJ1cGRhdGUiLCJjb25jYXQiLCJyZWFkQXNCaW5hcnlTdHJpbmciLCJkZWxldGVSZWNvcmQiLCJuZXdEYXRhIiwib3JpZ2luYWwiLCJkZWxldGVVc2VyIiwiZGVmYXVsdENvbHVtbiIsIkZpbHRlciIsIkNlbGwiLCJyZW5kZXJUYWJsZUhvb2tzIiwiaG9va3MiLCJ2aXNpYmxlQ29sdW1ucyIsInB1c2giLCJnZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMiLCJnZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzIiwicmVuZGVyVGFibGVIZWFkZXIiLCJoZWFkZXIiLCJyZW5kZXIiLCJyZW5kZXJUYWJsZVJvdyIsInBhZ2UiLCJwcmVwYXJlUm93IiwicmVuZGVyVGFibGVDZWxsIiwiY2VsbCIsInN0b3BQcm9wYWdhdGlvbiIsInRlc3RTZW50IiwidGVzdFN0YXR1cyIsImkxIiwiZ2V0Um93UHJvcHMiLCJsYXlvdXRUcmFuc2l0aW9uIiwiZXhpdCIsIm9wYWNpdHkiLCJtYXhIZWlnaHQiLCJjZWxscyIsImdldENlbGxQcm9wcyIsInJlbmRlckV4dHJhVGFibGVUZCIsImNvbnRyb2xzIiwiZm9ybWlrUHJvcHMiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImlzU3VibWl0dGluZyIsImZOYW1lIiwibE5hbWUiLCJoYW5kbGVCYXRjaEFjdGlvbnMiLCJ0YWJsZVN0YXRlIiwic3RhdGUiLCJzZWxlY3RlZEZsYXRSb3dzIiwic2VsZWN0ZWRSb3dJZHMiLCJzZWxlY3RlZExlbiIsInNlbGVjdGVkTWVtYmVycyIsInVuaW52aXRlZE1lbWJlcnMiLCJ1bmludml0ZWRMZW4iLCJlbCIsImNsaWNrIiwiY2IiLCJoYW5kbGVGb3JtU3VibWl0IiwicGF5bG9hZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmVzZXRGb3JtIiwiWXVwIiwibWluIiwicmVxdWlyZWQiLCJ1c2UiLCJDb21wb25lbnQiLCJqc3giLCJ3cmFwcGVyIiwicHJvcHMiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxDQUFDLFdBQUQsRUFBYyxVQUFkLEVBQTBCLE9BQTFCLENBQXZCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFvQyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQ7QUFBM0MsS0FDRSx5Q0FERixDQURGO0FBS0QsQ0FORDs7QUFRQSxJQUFNQyxZQUFZLEdBQUdDLDBEQUFNLENBQUNDLElBQVYsbUJBQWxCOztBQTZEQSxTQUFTQyxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUNDLEVBQWpDLEVBQXFDQyxXQUFyQyxFQUFrRDtBQUNoRCxTQUFPQyxzRUFBVyxDQUFDSCxJQUFELEVBQU9FLFdBQVAsRUFBb0I7QUFBRUUs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LEVBQUVZLFdBTGY7QUFNRSxtQkFBYSxFQUFFNEQsYUFOakI7QUFPRSxrQkFBWSxFQUFFO0FBQ1owRCxXQUFHLEVBQUUsSUFETztBQUVaQyxpQkFBUyxFQUFFbEosWUFGQztBQUdaMkUsV0FBRyxFQUFFO0FBSE8sT0FQaEI7QUFZRSxrQkFBWSxFQUFFcUIsaUJBWmhCLENBYUU7QUFDQTtBQWRGO0FBZUUsb0JBQWMsRUFBRUcsY0FmbEI7QUFnQkUsd0JBQWtCLEVBQUUsNEJBQUNpQixRQUFEO0FBQUEsZUFDbEJELG1CQUFrQixDQUFDQyxRQUFELEVBQVdDLFdBQVgsQ0FEQTtBQUFBLE9BaEJ0QjtBQW1CRSxhQUFPLEVBQUVyRyxXQW5CWCxDQW9CRTtBQXBCRjtBQXFCRSx5QkFBbUIsRUFBRTtBQUFFbUksV0FBRyxFQUFFdEI7QUFBUCxPQXJCdkI7QUFzQkUsa0JBQVksRUFBRTtBQUNab0IsV0FBRyxFQUFFLElBRE87QUFFWkcsZUFBTyxFQUFFL0ssWUFGRztBQUdaZ0wsYUFBSyxFQUFFO0FBQ0xDLGtCQUFRLEVBQUVqQyxXQUFXLENBQUNrQztBQURqQjtBQUhLLE9BdEJoQjtBQTZCRSxnQkFBVSxFQUFFN0Q7QUE3QmQsTUFERDtBQUFBLEdBakJILENBREYsQ0FYRixDQURGO0FBbUVELENBemxCRDs7SUFBTTdFLFM7O01BQUFBLFM7QUEybEJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzkzNTZhNWMwZjk4NzhmNWVkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgWExTWCBmcm9tICd4bHN4J1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZpTW9yZUhvcml6b250YWwgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7IEZhQ2xvdWRVcGxvYWRBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCB7IFNpTWludXRlbWFpbGVyIH0gZnJvbSAncmVhY3QtaWNvbnMvc2knXG5pbXBvcnQgeyBNZE1vcmUsIE1kRGVsZXRlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dC9MYXlvdXQnXG5pbXBvcnQgVGFibGVDb21wb25lbnQsIHtcbiAgbWF0Y2hTb3J0ZXIsXG4gIHVzZUFzeW5jRGVib3VuY2UsXG59IGZyb20gJ0Bjb21wb25lbnRzL1RhYmxlJ1xuaW1wb3J0IG1ha2VEYXRhLCB7IGlzRW1wdHkgfSBmcm9tICdAdXRpbHMvaGVscGVycydcbmltcG9ydCBDaGVja2JveCBmcm9tICdAY29tcG9uZW50cy9DaGVja2JveCdcbmltcG9ydCBEcm9wZG93biBmcm9tICdAY29tcG9uZW50cy9Ecm9wZG93bidcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IFVwbG9hZENvbXBvbmVudCBmcm9tICdAY29tcG9uZW50cy9GaWxlVXBsb2FkJ1xuaW1wb3J0IHsgZGVsZXRlVXNlciwgZ2V0VXNlcnMsIGludml0ZVVzZXIgfSBmcm9tICdAdXRpbHMvYXBpJ1xuXG5jb25zdCBlZGl0YWJsZUZpZWxkcyA9IFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2VtYWlsJ11cblxuY29uc3QgaGVhZGVyU2VhcmNoID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0XCIgc3R5bGU9e3sgd2lkdGg6ICc1NSUnIH19PlxuICAgICAgPHA+YW4gaGVhZGVyIHNlYXJjaCBoZXJlPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IHRhYmxlV3JhcHBlciA9IHN0eWxlZC5mb3JtYFxuICB0YWJsZSB7XG4gICAgLyogYm9yZGVyLXNwYWNpbmc6IDA7ICovXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3R5bGU6IDFlbTtcbiAgICBib3JkZXItc3BhY2luZzogMWVtO1xuICAgIC8qIGJvcmRlci1zcGFjaW5nOiAwIDFlbTsgKi9cblxuICAgIHRoZWFkIHRyIHtcbiAgICAgIDpudGgtY2hpbGQoMSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLyogYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICovXG4gICAgICAvKiBib3JkZXItYm90dG9tOiAycHggc29saWQ7ICovXG4gICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgdGJvZHkge1xuICAgICAgdHIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG5cbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41NyksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyAtd2Via2l0LXRyYW5zZm9ybSAwLjVzO1xuICAgICAgICA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAvKiBib3JkZXItYm90dG9tOiAwOyAqL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoLFxuICAgIHRkIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrOyAqL1xuXG4gICAgICA6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgLyogaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfSAqL1xuICAgIH1cblxuICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB9XG4gIH1cbmBcblxuZnVuY3Rpb24gZnV6enlUZXh0RmlsdGVyRm4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XG4gIHJldHVybiBtYXRjaFNvcnRlcihyb3dzLCBmaWx0ZXJWYWx1ZSwgeyBrZXlzOiBbKHJvdykgPT4gcm93LnZhbHVlc1tpZF1dIH0pXG59XG5cbi8vIExldCB0aGUgdGFibGUgcmVtb3ZlIHRoZSBmaWx0ZXIgaWYgdGhlIHN0cmluZyBpcyBlbXB0eVxuZnV6enlUZXh0RmlsdGVyRm4uYXV0b1JlbW92ZSA9ICh2YWwpID0+ICF2YWxcblxuLy8gQ3JlYXRlIGFuIGVkaXRhYmxlIGNlbGwgcmVuZGVyZXJcbmNvbnN0IEVkaXRhYmxlQ2VsbCA9ICh7XG4gIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gIHJvdzogeyBpbmRleCB9LFxuICBjb2x1bW46IHsgaWQgfSxcbiAgdXBkYXRlRGF0YSwgLy8gVGhpcyBpcyBhIGN1c3RvbSBmdW5jdGlvbiB0aGF0IHdlIHN1cHBsaWVkIHRvIG91ciB0YWJsZSBpbnN0YW5jZVxufSkgPT4ge1xuICAvLyBXZSBuZWVkIHRvIGtlZXAgYW5kIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGNlbGwgbm9ybWFsbHlcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgLy8gV2UnbGwgb25seSB1cGRhdGUgdGhlIGV4dGVybmFsIGRhdGEgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZFxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XG4gICAgdXBkYXRlRGF0YShpbmRleCwgaWQsIHZhbHVlKVxuICB9XG5cbiAgLy8gSWYgdGhlIGluaXRpYWxWYWx1ZSBpcyBjaGFuZ2VkIGV4dGVybmFsLCBzeW5jIGl0IHVwIHdpdGggb3VyIHN0YXRlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmFsdWUoaW5pdGlhbFZhbHVlKVxuICB9LCBbaW5pdGlhbFZhbHVlXSlcblxuICByZXR1cm4gZWRpdGFibGVGaWVsZHMuaW5jbHVkZXMoaWQpID8gKFxuICAgIDxpbnB1dFxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBiZy10cmFuc3BhcmVudCBmb2N1czpiZy13aGl0ZVwiXG4gICAgLz5cbiAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPnt2YWx1ZX08L2Rpdj5cbiAgKVxufVxuXG4vLyBEZWZpbmUgYSBkZWZhdWx0IFVJIGZvciBmaWx0ZXJpbmdcbmZ1bmN0aW9uIEdsb2JhbEZpbHRlcih7XG4gIHByZUdsb2JhbEZpbHRlcmVkUm93cyxcbiAgZ2xvYmFsRmlsdGVyLFxuICBzZXRHbG9iYWxGaWx0ZXIsXG59KSB7XG4gIGNvbnN0IGNvdW50ID0gcHJlR2xvYmFsRmlsdGVyZWRSb3dzLmxlbmd0aFxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGdsb2JhbEZpbHRlcilcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VBc3luY0RlYm91bmNlKCh2YWx1ZSkgPT4ge1xuICAgIHNldEdsb2JhbEZpbHRlcih2YWx1ZSB8fCB1bmRlZmluZWQpXG4gIH0sIDIwMClcblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTQgdGV4dC14bFwiPlxuICAgICAgU2VhcmNoOnsnICd9XG4gICAgICA8aW5wdXRcbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidy0yLzUgcHgtNCBweS0xIHJhZGl1cy1pbnB1dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPXtgJHtjb3VudH0gcmVjb3Jkcy4uLmB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZm9udFNpemU6ICcxLjFyZW0nLFxuICAgICAgICAgIGJvcmRlcjogJzAnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuLy8gRGVmaW5lIGEgVUkgZm9yIGZpbHRlcmluZ1xuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcbn0pIHtcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKSAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XG4gICAgICB9fVxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XG4gICAgLz5cbiAgKVxufVxuXG5jb25zdCBJbmRleFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3BhZ2VMb2FkaW5nLCBzZXRQYWdlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgLy8gY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKCkgPT4gbWFrZURhdGEoNikpXG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnVGFibGUnLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnRmlyc3QgTmFtZScsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2ZpcnN0TmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdsYXN0TmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdFbWFpbCcsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2VtYWlsJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnVGVzdCBJbmZvJyxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ0ludml0ZSBTZW50JyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnaW52aXRlU2VudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdUZXN0IFNlbnQnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICd0ZXN0U2VudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdUZXN0IFN0YXR1cycsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Rlc3RTdGF0dXMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgW11cbiAgKVxuICBjb25zdCBzcHJpbmcgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICB0eXBlOiAnc3ByaW5nJyxcbiAgICAgIGRhbXBpbmc6IDUwLFxuICAgICAgc3RpZmZuZXNzOiAxMDAsXG4gICAgfSksXG4gICAgW11cbiAgKVxuICBjb25zdCBmaWx0ZXJUeXBlcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIC8vIEFkZCBhIG5ldyBmdXp6eVRleHRGaWx0ZXJGbiBmaWx0ZXIgdHlwZS5cbiAgICAgIGZ1enp5VGV4dDogZnV6enlUZXh0RmlsdGVyRm4sXG4gICAgICAvLyBPciwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBmaWx0ZXIgdG8gdXNlXG4gICAgICAvLyBcInN0YXJ0V2l0aFwiXG4gICAgICB0ZXh0OiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiByb3dzLmZpbHRlcigocm93KSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXVxuICAgICAgICAgIHJldHVybiByb3dWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IFN0cmluZyhyb3dWYWx1ZSlcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKFN0cmluZyhmaWx0ZXJWYWx1ZSkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KSxcbiAgICBbXVxuICApXG5cbiAgY29uc3Qgc2VuZEludml0ZSA9IGFzeW5jIChlLCB4ZGF0YSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHJlc3A6IGFueSA9IGF3YWl0IGludml0ZVVzZXIoW3hkYXRhXSlcbiAgICBpZiAocmVzcCkge1xuICAgICAgY29uc3QgY3VycmVudERhdGEgPSBkYXRhLm1hcCgoZCkgPT4ge1xuICAgICAgICBpZiAoZC5lbWFpbCA9PT0geGRhdGEuZW1haWwpIGQuaW52aXRlU2VudCA9ICdZZXMnXG4gICAgICAgIHJldHVybiBkXG4gICAgICB9KVxuICAgICAgdG9hc3Quc3VjY2VzcygnVXNlciBpbnZpdGVkIHN1Y2Nlc3NmdWxseScpXG4gICAgICBzZXREYXRhKGN1cnJlbnREYXRhKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldEFuZFNldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFBhZ2VMb2FkaW5nKHRydWUpXG4gICAgY29uc3QgZGF0YVggPSAoYXdhaXQgZ2V0VXNlcnMoKSkgYXMgYW55XG4gICAgY29uc3QgZGF0YSA9IGRhdGFYPy5kYXRhIGFzIHVua25vd25bXVxuICAgIGlmICghaXNFbXB0eShkYXRhKSkge1xuICAgICAgc2V0RGF0YShBcnJheS5mcm9tKGRhdGEpKVxuICAgIH1cbiAgICBzZXRQYWdlTG9hZGluZyhmYWxzZSlcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFuZFNldFVzZXJzKClcbiAgfSwgW10pXG5cbiAgY29uc3QgdXBsb2FkRGF0YWJhc2UgPSAoZmlsZSwgdHlwZSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3ByZWFkc2hlZXQnOlxuICAgICAgICAvLyAgdmFyIGZpcnN0X3dvcmtzaGVldCA9IHdvcmtib29rLlNoZWV0c1t3b3JrYm9vay5TaGVldE5hbWVzWzBdXVxuICAgICAgICAvLyB2YXIgZGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbihmaXJzdF93b3Jrc2hlZXQsIHsgaGVhZGVyOiAxIH0pXG5cbiAgICAgICAgLy8gLyogY29udmVydCBmcm9tIGFycmF5IG9mIGFycmF5cyB0byB3b3JrYm9vayAqL1xuICAgICAgICAvLyB2YXIgd29ya3NoZWV0ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQoZGF0YSlcbiAgICAgICAgLy8gdmFyIG5ld193b3JrYm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKVxuICAgICAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG5ld193b3JrYm9vaywgd29ya3NoZWV0LCAnU2hlZXRKUycpXG4gICAgICAgIGNvbnN0IGYgPSBmaWxlLnNlbGVjdGVkRmlsZVswXVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIGNvbnN0IHN0YXRlRGF0YSA9IGRhdGFcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LnJlc3VsdFxuICAgICAgICAgIGNvbnN0IHJlYWRlZERhdGEgPSBYTFNYLnJlYWQoZGF0YSwgeyB0eXBlOiAnYmluYXJ5JyB9KVxuICAgICAgICAgIGNvbnN0IHdzbmFtZSA9IHJlYWRlZERhdGEuU2hlZXROYW1lc1swXVxuICAgICAgICAgIGNvbnN0IHdzID0gcmVhZGVkRGF0YS5TaGVldHNbd3NuYW1lXVxuXG4gICAgICAgICAgLyogQ29udmVydCBhcnJheSB0byBqc29uKi9cbiAgICAgICAgICAvLyBjb25zdCBkYXRhUGFyc2UgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od3MsIHsgaGVhZGVyOiAxIH0pXG4gICAgICAgICAgY29uc3QgZGF0YVBhcnNlID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdzLCB7IHJhdzogdHJ1ZSB9KVxuXG4gICAgICAgICAgY29uc3QgZmllbGROYW1lcyA9IFtcbiAgICAgICAgICAgICdTZXJpYWwgTm8nLFxuICAgICAgICAgICAgJ2ZpcnN0TmFtZScsXG4gICAgICAgICAgICAnbGFzdE5hbWUnLFxuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgICAgICdpbnZpdGVTZW50JyxcbiAgICAgICAgICAgICd0ZXN0U2VudCcsXG4gICAgICAgICAgICAndGVzdFN0YXR1cycsXG4gICAgICAgICAgICAnc3ViUm93cycsXG4gICAgICAgICAgXVxuICAgICAgICAgIGNvbnN0IG5ld0RhdGFTZXQgPSBkYXRhUGFyc2UubWFwKChkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBPYmplY3Qua2V5cyhkKVxuICAgICAgICAgICAgZmllbGROYW1lcy5mb3JFYWNoKChuYW1lLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChuYW1lICE9PSAnU2VyaWFsIE5vJykge1xuICAgICAgICAgICAgICAgIGRbbmFtZV0gPSBkW25hbWVdIHx8IGRbcG9zW2ldXSB8fCAnJ1xuICAgICAgICAgICAgICAgIGRbbmFtZV0gPSBTdHJpbmcoZFtuYW1lXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3N1YlJvd3MnKSBkW25hbWVdID0gdW5kZWZpbmVkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGRcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IG5ld0RhdGFTZXQuY29uY2F0KHN0YXRlRGF0YSlcblxuICAgICAgICAgIHNldERhdGEodXBkYXRlKVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZilcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWxldGVSZWNvcmQgPSBhc3luYyAocm93KSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKChkKSA9PiBkLmVtYWlsICE9PSByb3cub3JpZ2luYWwuZW1haWwpXG4gICAgYXdhaXQgZGVsZXRlVXNlcihyb3cub3JpZ2luYWwpXG4gICAgdG9hc3Quc3VjY2VzcygnRGVsZXRlZCBTdWNjZXNzZnVsbHknKVxuICAgIHNldERhdGEobmV3RGF0YSlcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIEZpbHRlciBVSVxuICAgICAgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuICAgICAgQ2VsbDogRWRpdGFibGVDZWxsLFxuICAgIH0pLFxuICAgIFtdXG4gIClcblxuICBjb25zdCByZW5kZXJUYWJsZUhvb2tzID0gKGhvb2tzKSA9PiB7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaCgoY29sdW1ucykgPT4gW1xuICAgICAgLy8gTGV0J3MgbWFrZSBhIGNvbHVtbiBmb3Igc2VsZWN0aW9uXG4gICAgICB7XG4gICAgICAgIGlkOiAnc2VsZWN0aW9uJyxcbiAgICAgICAgLy8gVGhlIGhlYWRlciBjYW4gdXNlIHRoZSB0YWJsZSdzIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIG1ldGhvZFxuICAgICAgICAvLyB0byByZW5kZXIgYSBjaGVja2JveFxuICAgICAgICBIZWFkZXI6ICh7IGdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyB9KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDaGVja2JveCB7Li4uZ2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzKCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICksXG4gICAgICAgIC8vIFRoZSBjZWxsIGNhbiB1c2UgdGhlIGluZGl2aWR1YWwgcm93J3MgZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyBtZXRob2RcbiAgICAgICAgLy8gdG8gdGhlIHJlbmRlciBhIGNoZWNrYm94XG4gICAgICAgIENlbGw6ICh7IHJvdyB9KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDaGVja2JveCB7Li4ucm93LmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMoKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICAuLi5jb2x1bW5zLFxuICAgICAge1xuICAgICAgICBpZDogJ2RlbGV0aW9uJyxcbiAgICAgICAgLy8gVGhlIGhlYWRlciBjYW4gdXNlIHRoZSB0YWJsZSdzIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIG1ldGhvZFxuICAgICAgICAvLyB0byByZW5kZXIgYSBjaGVja2JveFxuICAgICAgICBIZWFkZXI6ICh7IGdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyB9KSA9PiA8ZGl2PjwvZGl2PixcbiAgICAgICAgLy8gVGhlIGNlbGwgY2FuIHVzZSB0aGUgaW5kaXZpZHVhbCByb3cncyBnZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzIG1ldGhvZFxuICAgICAgICAvLyB0byB0aGUgcmVuZGVyIGEgY2hlY2tib3hcbiAgICAgICAgQ2VsbDogKHsgcm93IH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB7Li4ucm93LmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMoKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVJlY29yZChyb3cpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZERlbGV0ZVxuICAgICAgICAgICAgICB7Li4ucm93LmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMoKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS01MCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBncm91cC1ob3Zlcjpob3Zlcjp0ZXh0LXJlZC02MDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgXSlcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclRhYmxlSGVhZGVyID0gKGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGNvbHVtbi5yZW5kZXIoJ0hlYWRlcicpXG4gICAgcmV0dXJuIDw+e2hlYWRlcn08Lz5cbiAgfVxuXG4gIGNvbnN0IHJlbmRlclRhYmxlUm93ID0gKHBhZ2UsIHByZXBhcmVSb3cpID0+IHtcbiAgICBjb25zdCByZW5kZXJUYWJsZUNlbGwgPSAoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwuY29sdW1uLmlkID09PSAnaW52aXRlU2VudCcpIHtcbiAgICAgICAgaWYgKGNlbGwucm93Py52YWx1ZXM/Lmludml0ZVNlbnQ/LnRvTG93ZXJDYXNlKCkgPT09ICdubycpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBhbGlnbi1taWRkbGUgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCI+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgZ3JvdXAtZm9jdXM6ZmxleCBncm91cC1ob3ZlcjpmbGV4IGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiei0yMCBoaWRkZW4gbWwtNCBncm91cC1ob3ZlcjpmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgPEZpTW9yZUhvcml6b250YWwgY2xhc3NOYW1lPVwiZmxleCBzZWxmLWNlbnRlciBvcGFjaXR5LTUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidy00MCBweS0yIHNwYWNlLXktNCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImNvbXBvbmVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kSW52aXRlKGUsIGNlbGwucm93LnZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpTWludXRlbWFpbGVyIGNsYXNzTmFtZT1cImlubGluZSBtbC02IG1yLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuZCBJbnZpdGVcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGFyazpib3JkZXItZ3JheS03MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLW5vdC1hbGxvd2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUeXBvZ3JhcGh5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRNb3JlIGNsYXNzTmFtZT1cImlubGluZSBtbC02IG1yLTQgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBhbGlnbi1taWRkbGUgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDBcIj57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5jb2x1bW4uaWQgPT09ICd0ZXN0U2VudCcpIHtcbiAgICAgICAgaWYgKGNlbGwucm93LnZhbHVlcz8udGVzdFNlbnQ/LnRvTG93ZXJDYXNlKCkgPT09ICdubycpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCB0ZXh0LXJlZC02MDBcIj5cbiAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHRleHQtZ3JlZW4tNjAwXCI+XG4gICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgfVxuICAgICAgaWYgKGNlbGwuY29sdW1uLmlkID09PSAndGVzdFN0YXR1cycpIHtcbiAgICAgICAgaWYgKGNlbGwucm93Py52YWx1ZXM/LnRlc3RTdGF0dXM/LnRvTG93ZXJDYXNlKCkgPT09ICdwZW5kaW5nJylcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHRleHQteWVsbG93LTcwMFwiPlxuICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgdGV4dC1ncmVlbi02MDBcIj5cbiAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgXCI+XG4gICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3BhZ2UubWFwKChyb3csIGkxKSA9PiB7XG4gICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxtb3Rpb24udHJcbiAgICAgICAgICAgICAgey4uLnJvdy5nZXRSb3dQcm9wcyh7XG4gICAgICAgICAgICAgICAgbGF5b3V0VHJhbnNpdGlvbjogc3ByaW5nLFxuICAgICAgICAgICAgICAgIGV4aXQ6IHsgb3BhY2l0eTogMCwgbWF4SGVpZ2h0OiAwIH0sXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2kxICUgMiA/ICcnIDogJyd9IHRleHQtY2VudGVyIGgtMTZgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcCgoY2VsbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnRkXG4gICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0VHJhbnNpdGlvbjogc3ByaW5nLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGkxICUgMiA/ICdiZy1ncmF5LTQwMCBib3JkZXItZ3JheS00MDAnIDogJydcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBoLTE2YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3JlbmRlclRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgID8gcmVuZGVyVGFibGVDZWxsKGNlbGwpXG4gICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLnJlbmRlcignQ2VsbCcpfVxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24udGQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvbW90aW9uLnRyPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIHsvKiA8dHI+XG4gICAgICAgICAgPHRkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAvLyBjb2xTcGFuPXt2aXNpYmxlQ29sdW1ucy5sZW5ndGh9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkFkZCBuZXcgZGF0YTwvQnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+ICovfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyRXh0cmFUYWJsZVRkID0gKGNvbnRyb2xzLCBmb3JtaWtQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgdmlzaWJsZUNvbHVtbnMgfSA9IGNvbnRyb2xzXG4gICAgY29uc3Qge1xuICAgICAgdmFsdWVzLFxuICAgICAgZXJyb3JzLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZUJsdXIsXG4gICAgICBpc1N1Ym1pdHRpbmcsXG4gICAgfSA9IGZvcm1pa1Byb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciByb2xlPVwicm93XCIgY2xhc3NOYW1lPVwiaC0xNiBlbGV2YXRpb24tM1wiPlxuICAgICAgICA8dGQgcm9sZT1cImNlbGxcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgcm9sZT1cImNlbGxcIiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5mTmFtZX1cbiAgICAgICAgICAgICAgbmFtZT1cImZOYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJmTmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnRmlyc3QgTmFtZSd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCBweC0yIHJhZGl1cy1pbnB1dCBob3Zlcjpib3JkZXItcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge2Vycm9ycy5mTmFtZSAmJiB0b3VjaGVkLmZOYW1lICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbGVmdCB0ZXh0LXJlZC02MDBcIj57ZXJyb3JzLmZOYW1lfTwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIHJvbGU9XCJjZWxsXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubE5hbWV9XG4gICAgICAgICAgICAgIG5hbWU9XCJsTmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwibE5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0xhc3QgTmFtZSd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCBweC0yIHJhZGl1cy1pbnB1dCBob3Zlcjpib3JkZXItcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge2Vycm9ycy5sTmFtZSAmJiB0b3VjaGVkLmxOYW1lICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbGVmdCB0ZXh0LXJlZC02MDBcIj57ZXJyb3JzLmxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIHJvbGU9XCJjZWxsXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHBsYWNlaG9sZGVyPXsnTGFzdCBOYW1lJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnRW1haWwnfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggcHgtMiByYWRpdXMtaW5wdXQgaG92ZXI6Ym9yZGVyLXByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWxlZnQgdGV4dC1yZWQtNjAwXCI+e2Vycm9ycy5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZFxuICAgICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1yaWdodFwiXG4gICAgICAgICAgY29sU3Bhbj17dmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gNH1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sRm9yPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICBBZGQgbmV3XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUJhdGNoQWN0aW9ucyA9IChjb250cm9scykgPT4ge1xuICAgIGNvbnN0IHsgc3RhdGU6IHRhYmxlU3RhdGUsIHNlbGVjdGVkRmxhdFJvd3MgfSA9IGNvbnRyb2xzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0lkcyB9ID0gdGFibGVTdGF0ZVxuICAgIGNvbnN0IHNlbGVjdGVkTGVuID0gT2JqZWN0LmtleXMoc2VsZWN0ZWRSb3dJZHMgfHwge30pLmxlbmd0aFxuXG4gICAgY29uc3Qgc2VsZWN0ZWRNZW1iZXJzID0gc2VsZWN0ZWRGbGF0Um93cy5tYXAoKGQpID0+IGQub3JpZ2luYWwpXG4gICAgY29uc3QgdW5pbnZpdGVkTWVtYmVycyA9IHNlbGVjdGVkTWVtYmVycy5maWx0ZXIoXG4gICAgICAoZCkgPT4gZFsndGVzdFNlbnQnXT8udG9Mb3dlckNhc2UoKSAhPT0gJ25vJ1xuICAgIClcbiAgICBjb25zdCB1bmludml0ZWRMZW4gPSB1bmludml0ZWRNZW1iZXJzLmxlbmd0aFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke1xuICAgICAgICAgIHNlbGVjdGVkTGVuID8gJ2p1c3RpZnktYmV0d2VlbicgOiAnanVzdGlmeS1lbmQnXG4gICAgICAgIH0gdy1mdWxsIG1iLTJgfVxuICAgICAgPlxuICAgICAgICB7c2VsZWN0ZWRMZW4gPiAwICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHA+WW91IGhhdmUgc2VsZWN0ZWQge3NlbGVjdGVkTGVufSBtZW1iZXJzPC9wPlxuICAgICAgICAgICAge3VuaW52aXRlZExlbiA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgc2VuZEludml0ZShlLCB1bmludml0ZWRNZW1iZXJzKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTZW5kIEludml0YXRpb24gdG8ge3VuaW52aXRlZExlbn0gbWVtYmVyc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHshc2VsZWN0ZWRMZW4gJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VXBsb2FkQ29tcG9uZW50XG4gICAgICAgICAgICAgIGFsbG93ZWRFeHRlbnNpb25zPXtbXG4gICAgICAgICAgICAgICAgJ3hscycsXG4gICAgICAgICAgICAgICAgJ3hsc3gnLFxuICAgICAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8vIGF1dG9VcGxvYWQ9e3RydWV9XG4gICAgICAgICAgICAgIC8vIHJlbmRlcj17KGVsOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgcmVuZGVyPXsoZWw6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHctZnVsbCBweC00IHB5LTIgYm9yZGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcHJpbWFyeS1saWdodGVyIGhvdmVyOmJvcmRlci1wcmltYXJ5LWRhcmtlciB0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIGVsICYmIGVsLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZhQ2xvdWRVcGxvYWRBbHQgY2xhc3NOYW1lPVwidy02IGgtNiBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkIFNwcmVhZFNoZWV0XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB1cGxvYWRIYW5kbGVyPXsoZGF0YTogYW55LCBzdGF0ZTogYW55LCBjYjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkRGF0YWJhc2Uoc3RhdGUsICdzcHJlYWRzaGVldCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGYtZW5kXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XG4gICAgICAgICAgICAgICAgdXBsb2FkRGF0YWJhc2UoZSwgdW5pbnZpdGVkTWVtYmVycywgJ3NwcmVhZHNoZWV0JylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBVcGxvYWQgU3ByZWFkU2hlZXRcbiAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZGF0YSwgY2IpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkOiB7XG4gICAgICBmaXJzdE5hbWU/OiBzdHJpbmdcbiAgICAgIGxhc3ROYW1lPzogc3RyaW5nXG4gICAgICBlbWFpbD86IHN0cmluZ1xuICAgICAgaW52aXRlU2VudD86IHN0cmluZ1xuICAgICAgdGVzdFNlbnQ/OiBzdHJpbmdcbiAgICAgIHRlc3RTdGF0dXM/OiBzdHJpbmdcbiAgICB9ID0ge31cbiAgICBwYXlsb2FkLmZpcnN0TmFtZSA9IGRhdGEuZk5hbWVcbiAgICBwYXlsb2FkLmxhc3ROYW1lID0gZGF0YS5sTmFtZVxuICAgIHBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsXG4gICAgcGF5bG9hZC5pbnZpdGVTZW50ID0gJ05vJ1xuICAgIHBheWxvYWQudGVzdFNlbnQgPSAnTm8nXG4gICAgcGF5bG9hZC50ZXN0U3RhdHVzID0gJ05BJ1xuXG4gICAgY29uc3QgcmVzcDogYW55ID0gYXdhaXQgaW52aXRlVXNlcihbcGF5bG9hZF0pXG4gICAgaWYgKHJlc3ApIHtcbiAgICAgIGNiLnJlc2V0Rm9ybSgpXG4gICAgICB0b2FzdC5zdWNjZXNzKCdOZXcgZGF0YSBhZGRlZCcpXG4gICAgICBzZXREYXRhKHJlc3AuZGF0YSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHRpdGxlPVwiWW91ciBBd2Vzb21lIEFwcFwiXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctNnhsIHB5LTggb3ZlcmZsb3ctYXV0b1wiXG4gICAgICBoZWFkZXI9e2hlYWRlclNlYXJjaCgpfVxuICAgID5cbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuXG4gICAgICB7LyogPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC0zeGwgZm9udC1ibGFjayBkYXJrOnRleHQtZ3JheS0xMDBcIj5XZWxjb21lPC9oMT4gKi99XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgZm9udC1ib2xkZXJcIj5cbiAgICAgICAgRGVtbyBzcHJlYWRzaGVldCB1cGxvYWQgYW5kIGVtYWlsIGxpc3Qgc3lzdGVtLlxuICAgICAgPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZk5hbWU6ICcnLCBsTmFtZTogJycsIGVtYWlsOiAnJyB9fVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxuICAgICAgICAgIHZhbGlkYXRlT25CbHVyPXtmYWxzZX1cbiAgICAgICAgICB2YWxpZGF0ZU9uTW91bnQ9e2ZhbHNlfVxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xuICAgICAgICAgICAgZk5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAubWluKDMsICdNdXN0IGNvbnRhaW4gMyBjaGFyYWN0ZXJzIG9yIG1vcmUnKVxuICAgICAgICAgICAgICAucmVxdWlyZWQoJ0ZpcnN0IE5hbWUgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgIGxOYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgLm1pbigzLCAnTXVzdCBjb250YWluIDMgY2hhcmFjdGVycyBvciBtb3JlJylcbiAgICAgICAgICAgICAgLnJlcXVpcmVkKCdMYXN0IE5hbWUgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgLmVtYWlsKCdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKVxuICAgICAgICAgICAgICAucmVxdWlyZWQoJ1BsZWFzZSBwcm92aWRlIHRoZSBlbWFpbCcpLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgeyhmb3JtaWtQcm9wcykgPT4gKFxuICAgICAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XG4gICAgICAgICAgICAgIHRhYmxlQ2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgZmlsdGVyVHlwZXM9e2ZpbHRlclR5cGVzfVxuICAgICAgICAgICAgICBkZWZhdWx0Q29sdW1uPXtkZWZhdWx0Q29sdW1ufVxuICAgICAgICAgICAgICBnbG9iYWxGaWx0ZXI9e3tcbiAgICAgICAgICAgICAgICB1c2U6IHRydWUsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBHbG9iYWxGaWx0ZXIsXG4gICAgICAgICAgICAgICAgcG9zOiAnYmVsb3cnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZW5kZXJIZWFkZXI9e3JlbmRlclRhYmxlSGVhZGVyfVxuICAgICAgICAgICAgICAvLyByZW5kZXJGaWx0ZXI9IHsoY29sdW1uOiB1bmtub3duKSA9PiBKU1guRWxlbWVudH1cbiAgICAgICAgICAgICAgLy8gcmVuZGVyVGFibGVCb2R5PXtyZW5kZXJUYWJsZUJvZHl9XG4gICAgICAgICAgICAgIHJlbmRlclRhYmxlUm93PXtyZW5kZXJUYWJsZVJvd31cbiAgICAgICAgICAgICAgcmVuZGVyRXh0cmFUYWJsZVRkPXsoY29udHJvbHMpID0+XG4gICAgICAgICAgICAgICAgcmVuZGVyRXh0cmFUYWJsZVRkKGNvbnRyb2xzLCBmb3JtaWtQcm9wcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsb2FkaW5nPXtwYWdlTG9hZGluZ31cbiAgICAgICAgICAgICAgLy8gcmVuZGVyVGFibGVDZWxsPSB7KGNlbGw6IHVua25vd24pID0+IEpTWC5FbGVtZW50fVxuICAgICAgICAgICAgICBoYW5kbGVUYWJsZUNvbnRyb2xzPXt7IGpzeDogaGFuZGxlQmF0Y2hBY3Rpb25zIH19XG4gICAgICAgICAgICAgIHRhYmxlV3JhcHBlcj17e1xuICAgICAgICAgICAgICAgIHVzZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3cmFwcGVyOiB0YWJsZVdyYXBwZXIsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0OiBmb3JtaWtQcm9wcy5oYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY3VzdG9tSG9vaz17cmVuZGVyVGFibGVIb29rc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=