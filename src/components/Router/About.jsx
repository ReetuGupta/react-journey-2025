import { useNavigate } from "react-router";
export default function About() {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/support")
    }

    const handleBack = () => {
        navigate(-1)
    }
  return (
    <>
       <div>Welcome To About Page</div>
       <button className="border rounded-sm px-2 py-1" onClick={handleClick}>Go To Support Page</button>
       <button className="border rounded-sm px-2 py-1" onClick={handleBack}>Go Back</button>
    </>
  )
}
