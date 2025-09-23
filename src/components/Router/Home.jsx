import { useNavigate } from "react-router"


export default function Home() {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/about")
    }
  return (
    <>
       <div>Welcome To Home Page</div>
       <button className="border rounded-sm px-2 py-1" onClick={handleClick}>Go To About Page</button>
    </>
  )
}
