import React from 'react';
import {useEditor,EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline'
import { FaBold ,FaItalic ,FaUnderline ,FaStrikethrough ,FaCode ,FaParagraph } from "react-icons/fa";
import { RiCodeBlock ,RiH2 ,RiH4 ,RiH5 ,RiH6 ,RiListUnordered ,RiListOrdered } from "react-icons/ri";
import { BsTypeH1 ,BsTypeH3 ,BsBlockquoteLeft } from "react-icons/bs";
import { IoArrowUndo } from "react-icons/io5";
import { IoIosRedo } from "react-icons/io";
const extensions =[
    StarterKit,Underline
]
const content =``
const Tiptap = ({onEditorContentSave}) => {
    const editor=useEditor({
        extensions,
        content
    })
    if(!editor){
        return null;
    }
    const handleEditorcontent =()=>{
        const html=editor.getHTML();
        onEditorContentSave(html);
    }
  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button onClick={()=>editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}><FaBold />
        </button>
        <button onClick={()=>editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}><FaItalic />
        </button>
        <button onClick={()=>editor.chain().focus().toggleUnderline().run()} disabled={!editor.can().chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'is-active' : ''}><FaUnderline />
        </button>
        <button onClick={()=>editor.chain().focus().toggleStrike().run()} disabled={!editor.can().chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}><FaStrikethrough />
        </button>
        <button onClick={()=>editor.chain().focus().toggleCode().run()} disabled={!editor.can().chain().focus().toggleCode().run()} className={editor.isActive('code') ? 'is-active' : ''}><FaCode />
        </button>
        <button onClick={()=>editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}><RiCodeBlock/>
        </button>
        <button onClick={()=>editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}><FaParagraph />
        </button>
        <button onClick={()=>editor.chain().focus().toggleHeading({level:1}).run()} className={editor.isActive('heading',{level:1}) ? 'is-active' : ''}><BsTypeH1/>
        </button>
        <button onClick={()=>editor.chain().focus().toggleHeading({level:2}).run()} className={editor.isActive('heading',{level:2}) ? 'is-active' : ''}><RiH2 />
        </button>
        <button onClick={()=>editor.chain().focus().toggleHeading({level:3}).run()} className={editor.isActive('heading',{level:3}) ? 'is-active' : ''}><BsTypeH3 />
        </button>
        <button onClick={()=>editor.chain().focus().toggleHeading({level:4}).run()} className={editor.isActive('heading',{level:4}) ? 'is-active' : ''}><RiH4 />
        </button>
        <button onClick={()=>editor.chain().focus().toggleHeading({level:5}).run()} className={editor.isActive('heading',{level:5}) ? 'is-active' : ''}><RiH5 />
        </button>
        <button onClick={()=>editor.chain().focus().toggleHeading({level:6}).run()} className={editor.isActive('heading',{level:6}) ? 'is-active' : ''}><RiH6 />
        </button>
        <button onClick={()=>editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}><RiListUnordered />
        </button>
        <button onClick={()=>editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}><RiListOrdered />
        </button>
        <button onClick={()=>editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is-active' : ''}><BsBlockquoteLeft />
        </button>
        <button onClick={()=>editor.chain().focus().setHardBreak().run() ? 'is-active' : ''}>hard break
        </button>
        <button onClick={()=>editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run() ? 'is-active' : ''}><IoArrowUndo/>
        </button>
        <button onClick={()=>editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run() ? 'is-active' : ''}><IoIosRedo/>
        </button>
      </div>
      <div >
        <EditorContent editor={editor} style={{ border: '1px solid #ddd', padding: '10px',width:'50vw', borderRadius: '5px' }}/>
      </div>
      <button onClick={handleEditorcontent}  style={{ marginTop: '10px', padding: '8px 12px', cursor: 'pointer', background:'orange'}}>save </button>
    </div>
  )
}

export default Tiptap
