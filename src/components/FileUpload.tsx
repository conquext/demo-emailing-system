/* eslint-disable @typescript-eslint/no-explicit-any */
import { getFileSizeAndUnit, isEmpty } from '@utils/helpers'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { toast as toaster } from 'react-toastify'

interface UploadProps {
  disabled?: boolean
  autoUpload?: boolean
  allowedExtensions?: string[]
  maxFileSize?: number
  className?: string
  render: (el: HTMLInputElement | null) => JSX.Element
  // render: (uploadElement: HTMLElement | null) => JSX.Element
  refreshCallback?: (data: UploadState) => void
  uploadHandler?: (
    data: FormData,
    state: UploadState,
    cb: (update: any) => void
  ) => Promise<boolean> | void
}

type UploadState = {
  files: any[]
  events: any[]
  filePreviews: any
  uploading: boolean
  content: string
  selectedFile: any
  loaded: number
  warning: string
  error: string
}

type UploadStateOptional = {
  files?: any[]
  events?: any[]
  filePreviews?: any
  uploading?: boolean
  content?: string
  selectedFile?: any
  loaded?: number
  warning?: string
  error?: string
}

const initialState: UploadState = {
  files: [],
  events: [],
  filePreviews: {},
  uploading: false,
  selectedFile: null,
  loaded: 0,
  error: '',
  warning: '',
  content: '',
}

export default function UploadComponent({
  autoUpload = true,
  allowedExtensions = [
    '.doc',
    '.docx',
    '.xls',
    '.xlsx',
    '.pdf',
    '.svg',
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/*',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
  maxFileSize = 40000000,
  disabled,
  className = '',
  render,
  refreshCallback,
  uploadHandler,
}: UploadProps) {
  const [state, setState] = useState<UploadState>(initialState)
  const [runAutoUpload, setAutoUpload] = useState(false)
  const [load, reload] = useState(false)

  function updateState(update: UploadStateOptional) {
    const newState = { ...state, ...update }
    setState(newState)
    refreshCallback && refreshCallback(newState)
    return newState
  }

  const toast = {
    warn: (msg: string) => {
      toaster.warn(msg)
      updateState({ error: msg })
    },
    error: (msg: string) => {
      toaster.error(msg)
      updateState({ error: msg })
    },
    success: (msg: string) => {
      toaster.success(msg)
      updateState({ error: '' })
    },
  }

  const checkMimeType = (files: FileList, resetField?: () => void) => {
    const err = []
    const types = allowedExtensions
    for (let x = 0; x < files.length; x++) {
      if (types.every((type) => files[x]?.type !== type)) {
        err[x] = files[x].type + ' is not a supported format\n'
      }
    }
    for (let z = 0; z < err.length; z++) {
      toast.error(err[z])
      resetField && resetField()
    }
    if (!isEmpty(err)) return false
    return true
  }

  const maxSelectFile = (files: FileList, resetField?: () => void) => {
    const maxLength = 1

    if (files.length > maxLength) {
      const msg = `Only ${maxLength} file can be uploaded at a time`
      resetField && resetField()
      toast.warn(msg)
      return false
    }
    return true
  }

  const checkFileSize = (files: FileList, resetField?: () => void) => {
    //  default max size is 2.05GB
    const size = maxFileSize || 20000000
    const err = []
    for (let x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] =
          files[x].type +
          ' is too large, please pick a smaller file\n' +
          `Max size: ${getFileSizeAndUnit(size)}`
      }
    }
    for (let z = 0; z < err.length; z++) {
      toast.error(err[z])
      resetField && resetField()
    }
    if (!isEmpty(err)) return false
    return true
  }

  const readFile = (
    file: any,
    currentIndex = 0,
    lState: UploadStateOptional = state,
    validateFile?: (file: any) => any
  ) => {
    // run validations if any
    if (validateFile) {
      validateFile(file)
    }

    const files = lState.files

    const reader = new FileReader()
    reader.addEventListener('load', (event) => {
      if (event.target) {
        const filesData: {
          url: string
          meta: any
          loaded: number
        } = {
          url: event.target.result as string,
          meta: Array.from(lState.selectedFile)[currentIndex],
          loaded: files[currentIndex] ? files[currentIndex].loaded : 0,
        }
        const newfileUpdate = files
        newfileUpdate[currentIndex] = filesData
        updateState({
          files: newfileUpdate,
          selectedFile: lState.selectedFile,
        })
      }
    })
    reader.readAsDataURL(file)
  }

  const onChangeHandler:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined = (event) => {
    const files = event.target.files
    const resetField = () => (event.target.value = '')
    if (files) {
      if (
        maxSelectFile(files, resetField) &&
        checkMimeType(files, resetField) &&
        checkFileSize(files, resetField)
      ) {
        // if return true allow to setState
        const newState = updateState({
          selectedFile: files,
          loaded: 0,
        })
        Array.from(files).forEach((fl: any, index: number) =>
          readFile(fl, index, newState)
        )
        if (autoUpload) {
          setAutoUpload(true)
        }
      }
    }
  }

  const handleUpload = (
    data: FormData,
    state: UploadState,
    cb: (update: any) => void
  ) => {
    if (uploadHandler) uploadHandler(data, state, cb)
  }

  const onClickHandler = (newState: UploadState = state) => {
    try {
      const selectedFile = newState.selectedFile
      const data = new FormData()
      if (!isEmpty(selectedFile)) {
        for (let x = 0; x < selectedFile.length; x++) {
          data.append('file', selectedFile[x])
        }
        handleUpload(data, newState, updateState)
      }
    } catch (err) {
      console.log('err', err)
    } finally {
      setAutoUpload(false)
    }
  }

  const uploadArea = useRef(null)
  const uploadDomRef = useRef<HTMLInputElement>(null)
  const dc = useRef(null)
  const uploadDom = '#common-upload-component'

  useEffect(() => {
    dc.current = document
    uploadArea.current = document.querySelector(uploadDom) as HTMLElement
    if (runAutoUpload) onClickHandler(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runAutoUpload, uploadDomRef.current])

  const getUploadArea = () => {
    if (dc.current) return dc.current.querySelector(uploadDom) as HTMLElement
    else if (uploadArea.current) return uploadArea.current
    else if (uploadDomRef.current) return uploadDomRef.current
    else if (!load) reload(true)
  }

  return (
    <div
      id="drop-area"
      className={`pt-4 relative ${className}`}
      style={{ minHeight: '50px' }}
    >
      <div className="container hidden">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input
                type="file"
                id="common-upload-component"
                ref={uploadDomRef}
                disabled={Boolean(disabled)}
                className="form-control"
                accept="xls, xlsx"
                onChange={onChangeHandler}
              />
            </div>

            {!autoUpload && (
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={() => onClickHandler()}
              >
                Upload
              </button>
            )}
          </div>
        </div>
      </div>
      {render(getUploadArea())}
    </div>
  )
}
