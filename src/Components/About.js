import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Breadcrumbs,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
import React from "react";
const About = () => {
    return (
        <div>
            <Breadcrumbs className="m-5">
            <Link to = "/" className="opacity-60">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </Link>
            <Link to = '' className="opacity-60">
                <span>About Us</span>
            </Link>
    </Breadcrumbs>
        <div className="flex m-[25%] mt-[5%]">
      <Card className="w-96 border-4 border-gray-900 mb-[2%] mr-[15%] transform hover:scale-105">
      <CardHeader floated={false} className="h-80">
        <img src="https://i.ibb.co/jrgGmqm/1699762229295.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Bandreddy Eswar Sai
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#"
            variant="lead"
            color="blue"
            textGradient
          >
            <img src="https://i.ibb.co/0rcT8Bg/image.png" className="w-8"/>
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://www.linkedin.com/in/b-eswar-sai-121975220/"
            variant="lead"
            color="light-blue"
            textGradient
          >
           <img src="https://i.ibb.co/McXV4TX/174857.png" className="w-8"/>
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://www.instagram.com/bandreddy_eswar_sai?igsh=NXdqbjBkaW9hbjV3"
            variant="lead"
            color="purple"
            textGradient
          >
            <img src = "https://i.ibb.co/DR7PCH2/image.png" className=" w-8"/>
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    {/* sathwik */}
    <Card className="w-96 border-4 border-gray-900 mb-[2%] transform hover:scale-105">
      <CardHeader floated={false} className="h-80">
        <img src="https://i.ibb.co/TK2LJjn/IMG-2120.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Guna Sathwik Maddali
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#"
            variant="lead"
            color="blue"
            textGradient
          >
            <img src="https://i.ibb.co/0rcT8Bg/image.png" className="w-8"/>
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://www.linkedin.com/in/guna-maddali-9b18a81a5"
            variant="lead"
            color="light-blue"
            textGradient
          >
           <img src="https://i.ibb.co/McXV4TX/174857.png" className="w-8"/>
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://www.instagram.com/sathwikmanu?igsh=OTZlc2Z6ZG0ycmlm&utm_source=qr"
            variant="lead"
            color="purple"
            textGradient
          >
            <img src = "https://i.ibb.co/DR7PCH2/image.png" className=" w-8"/>
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
        </div>
        </div>
    )
}
export default About;