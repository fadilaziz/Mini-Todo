import {useState} from 'react'
import { useRef } from 'react';
// Button Component
function Button(props) {
  return(
    <button onClick={props.onClick} className='w-full bg-gray-300 p-2 rounded-md cursor-pointer'>
      {props.tag}
    </button>
  )
}
export default function App() {
  const [todos, setTodods] = useState([
    {title:'Ngopi',desc:'Ngopi bareng pak eko sambil ngomongin masa depan.'}
  ]);
  const inputRefTitle = useRef(null);
  const inputRefDesc = useRef(null);
  // Add function
  function handleAdd() {
    const newTitle = inputRefTitle.current.value.trim();
    const newDesc = inputRefDesc.current.value.trim();
    if (newTitle | newDesc === "") {
      alert('kolom harus Diisi...!');
      return
    };
    setTodods(prev => [...prev,{title:newTitle,desc:newDesc}]);
    alert('Tugas Berhasil ditambahkan ✅')
    inputRefTitle.current.value="";
    inputRefDesc.current.value="";
  }
  // Delete Function
  function handleDelete(index) {
    if (window.confirm("Yakin ingin menghapus tugas ini..?") == true) {
      setTodods(prev => prev.filter((_,i) => i != index));
      alert('Tugas Dihapus ✅');
    }
  }
  // Edit Function 
  function handleEdit(index) {
    const newTitle = prompt('Ubah Titlenya');
    const newDesc = prompt('Ubah Descripsinya');
    if (newTitle && newDesc) {
      setTodods(prev =>(prev.map((item,i) => 
        i === index ? {...item,title: newTitle,desc: newDesc} : item
      )))
    }
  }
  return(
    <div className='flex flex-col w-7xl mt-10 border-1 border-gray-400 p-4 m-auto rounded-md'>
      <h1 className='font-bold text-2xl'>
        Daftar Tugas
      </h1>
      <div className='grid grid-cols-4 gap-4 w-full gap-2 mt-2 rounded-md gap-2'>
      {todos.map((item, index) => (
        <div key={index} className='border-1 border-gray-400 p-5 rounded-md'>
          <h1 className='font-bold text-xl mb-2'>
            {item.title}
          </h1>
          <p className='text-gray-700 w-auto'>
            {item.desc}
          </p>
          <div className='flex py-1 mt-2 gap-2'>
            <Button onClick={() => handleEdit(index)} tag="Edit"/>
            <Button onClick={() => handleDelete(index)} tag="Hapus"/>
          </div>
        </div>
      ))}
      <div className='w-75 border-1 border-gray-400 rounded-md p-2'>
        <form action="">
          <label htmlFor="">Judul</label>
          <input ref={inputRefTitle} className='border-1 border-gray-400 rounded-md mb-2 w-full ' type="text"/>
          <label htmlFor="">Descripsi</label>
          <input ref={inputRefDesc} className='border-1 border-gray-400 rounded-md mb-2 w-full ' type="text"/>
        </form>
        <Button onClick={handleAdd} tag="Tambah"/>
      </div>
    </div>
    </div>
  )
}
// function Button(props) {
//   return(
//     <button onClick={props.onClick}>{props.tag}</button>
//   )
// }

// export default function App() {
//   const [todo, setTodo] = useState(["Minum obat","Olahraga"]);
//   const inputRef = useRef(null);
//   // Add Function
//   function addTask() {
//     const value = inputRef.current.value.trim();
//     if (value === "") return; // biar gak nambah item kosong
//     setTodo(prev => [...prev, value]);
//     inputRef.current.value = ""; // kosongkan input setelah tambah
//   }
//   // Delete Function
//   function deleteTask(index) {
//     setTodo(prev => prev.filter((_,i) => i != index));
//   }
//   // Update function
//   function updateTask(index) {
//     const newTodo = todo.map((item, i) => 
//       i === index ? "qwerty" : item
//     );
//     setTodo(newTodo)
//   }
//   return(
//     <div>
//       <ul>
//         {todo.map((items,index)=>(
//           <li style={{display:'flex',gap:'10px',alignItems:'center'}} key={index}>
//             {items}
//             <Button onClick={() => deleteTask(index)} tag="Hapus"/>
//             <Button onClick={() => updateTask(index)} tag="Edit"/>
//           </li>
//         ))}
//       </ul>
//       <div style={{display:'flex',width:'auto',alignItems:'center',gap:'10px'}}>
//         <input ref={inputRef} placeholder='Maukan tugas' style={{width:'150px'}}/>
//         <Button onClick={addTask}tag="Tambah"/>
//       </div>
//     </div>
//   )
// }


// Button Component 
// function Button(props) {
//   return(
//     <button style={{
//       width:'100px'
//     }} onClick={props.onClick}>{props.type}</button>
//   )
// }

// export default function App() {
//   const [user, setUser] = useState({
//     name:"Fadil",
//     age:15,
//     status:""
//   })
//   // Fungsi untuk handle nama
//   function handleClickName() {
//     setUser(prev =>({...prev,name:prev.name === "Fadil" ? "Dil" : "Fadil" }));
//   }
//   // Fungsi untuk handle umur 
//   function handleClickAge() {
//     setUser(prev =>({...prev,age:prev.age + 1}));
//     // Candaan aj hhe
//     if (user.age == 25) {
//       alert("u are fosil")
//     }
//   }
//   // Fungsi untuk handle status
//   function handleClickStatus() {
//       setUser(prev =>({...prev, status:prev.age > 20 ? "Dewasa" : "Remaja"}))
//   }
//   return(
//     <>
//       <p >Nama : {user.name}</p>
//       <p>Umur : {user.age}</p>
//       <p>Status : {user.status}</p>
//       <div style={{
//         display:'flex',
//         gap:'10px',
//         width:'600px'
//       }}>
//         <Button onClick={handleClickName} type='Ubah Nama'/>
//         <Button onClick={handleClickAge} type='Ubah Umur'/>
//         <Button onClick={handleClickStatus} type='Ubah status'/>
//       </div>
//     </>
//   )
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   function handleClickPlus() {
//     setCount(count + 1);
//   }
//   function handleClickMinus() {
//     if (count == 0) {
//       return
//     }
//     setCount(count - 1);
//   }
//   return(
//     <>
//     <p>{count}</p>
//     <Button onClick={handleClickPlus} type="Tambah"/>
//     <Button onClick={handleClickMinus} type="Kurang"/>
//     </>
//   )
// }


// export default function App() {
//   const [count, setCount] = useState(0);

//   function handleClickPlus() {
//     if (count == 10) {
//       alert('Kapasitas lebih dari batas maksimal')
//       return
//     }
//     setCount(count + 1)
//   }
//   function handleClickMin() {
//     if (count == 0) {
//       alert('Gabisa kocak')
//       return
//     } 
//     setCount(count - 1)
//   }
//   function handleClickReset() {
//     setCount(count - count)
//   }

//   return (
//     <>
//       <div className="container" style={{display:'flex',fontSize:'20px'}} >
//         <Button onClick={handleClickMin} type="-"/>
//       <p style={{margin:'0px 20px'}}>{count}</p>
//         <Button onClick={handleClickPlus} type="+"/>
//       </div>
//       <div onClick={handleClickReset} style={{display:'flex', justifyContent:'center',width:'100px',marginTop:'10px'}}>
//         <Button type="Reset"/>
//       </div>
//     </>
//   )
// } 


