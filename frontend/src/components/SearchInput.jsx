import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";

const SearchInput = () => {
  const [search , setSearch]=useState("");
  const {setselectedConversation}=useConversation();
  const { conversations }=useGetConversations()
  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
       return toast.error("Search must be at least 3 characters long");
      
  
       const conversation=conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase())); 
       if(conversation){
        setselectedConversation(conversation);
        setSearch('');
       }

       else{
        toast.error("No such as user found ");
       
       }
  }
 
  return (
    <form onSubmit={handleSubmit}  className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white"> 
         {/* <IoSearchSharp className='w-6 h-6 outline-none'/> */}
         <FaSearch />
         </button>
    </form>
  )
}

}

export default SearchInput
