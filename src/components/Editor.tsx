import dynamic from 'next/dynamic'
import { FC, memo } from 'react'
import 'react-quill-new/dist/quill.snow.css'

export interface EditorProps {
  value?: string
  onChange: (content: string) => void
}

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => (
    <p className="min-h-[110px] w-full min-w-[326px] md:min-h-[86px] md:min-w-[400px]">
      Loading editor...
    </p>
  ),
})

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  const onEditorStateChange = (val: string) => {
    if (onChange) {
      onChange(val)
    }
  }

  return (
    <div className="h-full min-h-[86px] w-full md:min-h-[110px] md:min-w-[400px]">
      <ReactQuill theme="snow" value={value} onChange={onEditorStateChange} />
    </div>
  )
}

export default memo(Editor)
