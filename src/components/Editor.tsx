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
    <p className="flex min-h-[110px] w-full min-w-[326px] items-center justify-center md:min-h-[86px] md:min-w-[480px]">
      <span className="loading loading-dots loading-xl"></span>
    </p>
  ),
})

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ align: ['right', 'center', 'justify'] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
    ],
  }

  const onEditorStateChange = (val: string) => {
    if (onChange) {
      onChange(val)
    }
  }

  return (
    <div className="h-full min-h-[86px] w-full md:min-h-[110px] md:min-w-[480px]">
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={onEditorStateChange}
      />
    </div>
  )
}

export default memo(Editor)
