import { useNavigate } from "react-router";

export default function Labs() {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/")
    }

    const handleBack = () => {
        navigate(-1)
    }
  return (
    <>
    <div>Welcome To Labs Page</div>
    <button className="border rounded-sm px-2 py-1" onClick={handleClick}>Go To Home Page</button>
    <button className="border rounded-sm px-2 py-1" onClick={handleBack}>Go Back</button>
    </>
  )
}
