import { PlusIcon } from "@heroicons/react/24/solid"

function NewChat() {
  return (
    <div className="border border-gray-700 chatRow flex">
        <PlusIcon className="h-4 w-4"/>
        <p>NewChat</p>
    </div>
  )
}

export default NewChat