import React from 'react'
import IncomeModal from "@/components/IncomeModal";

const Income = () => {
    return <div className="w-[75%] ml-8 mt-6 mr-8">
        <div className="flex justify-between w-full">
            <h1 className="font-andika font-bold text-xl">Income</h1>
            <IncomeModal />
        </div>
    </div>
}
export default Income
