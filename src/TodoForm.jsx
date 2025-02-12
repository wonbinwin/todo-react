import PropTypes from 'prop-types'

import {}


const onChange=(e)=>setTodo(e.target.value)

const onSubmit=(e)=>{
    e.preventDefault()

    if(TodoForm.length===0){
        alert('')
        return
    }



}