"use client"
import {DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Modal} from "@/components/ui/Modal";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import EmojiPicker from "emoji-picker-react";

const IncomeModal = () => {

    const [showEmojiPicker, steShowEmojiPicker] = useState(false)
    const [selectedEmoji, setSelectedEmoji] = useState("")

    const handleEmojiSelect = (event: any, emojiObject: any) => {
        setSelectedEmoji(emojiObject.emoji);
        showEmojiPicker(false);
    }

    return <Modal>
        <DialogTrigger asChild>
            <Button className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-md">Add Income</Button>
        </DialogTrigger>
        <DialogContent className="p-6 rounded-md bg-gray-700 text-white">
            <DialogHeader className="mb-4">
                <DialogTitle className="text-xl font-semibold">
                    Add Income
                </DialogTitle>
                <DialogDescription className="text-white font-semibold">
                    Add income details
                </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center gap-4">
                <div>
                    <span className="text-4xl border border-gray-300 py-1 px-2 rounded-md cursor-pointer"
                    onClick={() => steShowEmojiPicker(!showEmojiPicker)}>
                       {selectedEmoji}
                    </span>
                    {showEmojiPicker? <div>
                        <EmojiPicker
                        onEmojiClick={handleEmojiSelect}/>
                    </div>: null}
                </div>
            </div>
        </DialogContent>
    </Modal>
}
export default IncomeModal
