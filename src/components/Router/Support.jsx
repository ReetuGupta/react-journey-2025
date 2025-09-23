import { useNavigate } from "react-router";
export default function Support() {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/labs")
    }

    const handleBack = () => {
        navigate(-1)
    }
  return (
    <>
       <div>Welcome To Support Page</div>
       <button className="border rounded-sm px-2 py-1" onClick={handleClick}>Go To Labs Page</button>
       <button className="border rounded-sm px-2 py-1" onClick={handleBack}>Go Back</button>
    </>
  )
}
