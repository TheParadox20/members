'use client'
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import useUser from "@/app/lib/hooks/useUser";
import Bur from "@/app/ui/charts/Bar"
import Lyn from "@/app/ui/charts/Line"
import Py from "@/app/ui/charts/Pie"
import Spinner from "@/app/ui/Spinner";
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation";
import { getData } from "@/app/lib/data"

export default function Dashboard(){
    const { user } = useUser()
    const { data, error, isLoading } = useSWR(['/summary',{}], fetcher)
    console.log(data)

    let router = useRouter()
    
    if (user.role != 'Admin') {
        router.push('/profile')
    }
    if (isLoading) return <Spinner />
    if (error) return <></>
    return(
        <>
        <h1 className="my-2 ml-2 md:ml-0 text-primary font-bold text-2xl 2xl:text-4xl overflow-hidden">Dashboard</h1>
        <div className="mb-0 w-[100%] px-4 overflow-x-auto no-scroll">
            <div className="flex w-fit gap-10">
                <div className="bg-tertiary bg-opacity-15 px-6 py-4 rounded-md w-80">
                    <div className="flex justify-between mb-4">
                        <div>
                            <div className="mb-4 lg:text-xs 2xl:text-base">Total Revenue</div>
                            <div className="text-2xl font-bold lg:text-xl 2xl:text-2xl">KES {data.revenue.quantity}</div>
                        </div>
                        <div className="flex bg-primary bg-opacity-25 px-4 mb-4 items-center rounded-lg">
                            <img src="/icons/bag.svg" className="w-8 h-8 block" alt="" />
                        </div>
                    </div>
                    <div className="flex text-sm">
                        <div className={`flex ${data.revenue.trend?'text-primary':'text-warning'}`}>
                            {data.revenue.trend?<ArrowTrendingUpIcon className="w-5 h-5 mx-2"/>:<ArrowTrendingDownIcon className="w-5 h-5 mx-2"/>}
                            <span>{data.revenue.rate}% {`${data.revenue.trend?'up':'down'}`} from {'last month'}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-tertiary bg-opacity-15 px-6 py-4 rounded-md w-80">
                    <div className="flex justify-between mb-4">
                        <div>
                            <div className="mb-4 lg:text-xs 2xl:text-base">Total Logins</div>
                            <div className="text-2xl font-bold lg:text-xl 2xl:text-2xl">{data.logins.quantity}</div>
                        </div>
                        <div className="flex bg-primary bg-opacity-25 px-4 mb-4 items-center rounded-lg">
                            <img src="/icons/login.svg" className="w-8 h-8 block" alt="" />
                        </div>
                    </div>
                    <div className="flex text-sm">
                        <div className={`flex ${data.logins.trend?'text-primary':'text-warning'}`}>
                            {data.logins.trend?<ArrowTrendingUpIcon className="w-5 h-5 mx-2"/>:<ArrowTrendingDownIcon className="w-5 h-5 mx-2"/>}
                            <span>{data.logins.rate}% {`${data.logins.trend?'up':'down'}`} from {'last month'}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-tertiary bg-opacity-15 px-6 py-4 rounded-md w-fit">
                    <div className="flex justify-between mb-4">
                        <div>
                            <div className="mb-4 lg:text-xs 2xl:text-base">Print Certificate Requests</div>
                            <div className="text-2xl font-bold lg:text-xl 2xl:text-2xl">{data.print.quantity}</div>
                        </div>
                        <div className="flex bg-primary ml-4 bg-opacity-25 px-4 mb-4 items-center rounded-lg h-14">
                            <img src="/icons/printer.svg" className="h-6 w-6 2xl:w-8 2xl:h-8 block" alt="" />
                        </div>
                    </div>
                    <div className="flex text-sm">
                        <div className={`flex ${data.print.trend?'text-primary':'text-warning'}`}>
                            {data.print.trend?<ArrowTrendingUpIcon className="w-5 h-5 mx-2"/>:<ArrowTrendingDownIcon className="w-5 h-5 mx-2"/>}
                            <span>{data.print.rate}% {`${data.print.trend?'up':'down'}`} from {'last month'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Lyn/>
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-10 justify-between mt-16">
            <Bur/>
            <Py/>
        </div>
        </>
    )
}