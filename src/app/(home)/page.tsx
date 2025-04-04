import Appointment from './_components/Appointment'
import Banner, { MobileBanner } from './_components/Banner'
import HeroSection from './_components/HeroSection'
import LecturerCarousel from './_components/LecturerCarousel'
import Navbar, { MobileNavbar } from './_components/Navbar'
import OpenCampus from './_components/OpenCampus'
import StudentWorks from './_components/StudentWorks'
import Who from './_components/Who'
import { Lecturers } from './data/lecturers'
import { Reputables } from './data/reputables'

export default function Home() {
    return (
        <div className="relative  max-w-screen overflow-hidden">
            <div className="max-w-screen overflow-hidden">
                <HeroSection />
                <div className="block lg:hidden">
                    <MobileNavbar />
                </div>
            </div>
            <div className="hidden lg:block sticky top-0 bg-white z-10">
                <Navbar />
            </div>
            <div className="mt-[64px] pb-[60px]">
                <div className='hidden lg:block'>
                    <Banner />
                </div>
                <div className='block lg:hidden'>
                    <MobileBanner />
                </div>
            </div>
            <div className="mt-[50px] mb-[60px]">
                <Who />
            </div>
            <div className="mt-[50px] mb-[60px]">
                <StudentWorks />
            </div>
            <div className="max-w-screen overflow-hidden mt-[50px] mb-[60px]">
                <div className="container">
                    <h1 className="text-center text-[32px] font-sans font-semibold">
                        講師
                    </h1>
                    <div className="mt-[35px]">
                        <LecturerCarousel data={Lecturers} />
                    </div>
                </div>
            </div>
            <div className="max-w-screen overflow-hidden mt-[50px] mb-[60px]">
                <div className="container">
                    <h1 className="text-center text-[32px] font-sans font-semibold">
                        卒業生
                    </h1>
                    <div className="mt-[35px]">
                        <LecturerCarousel data={Reputables} />
                    </div>
                </div>
            </div>
            <OpenCampus />
            <Appointment />
        </div>
    )
}
