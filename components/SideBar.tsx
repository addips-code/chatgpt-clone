'use client';

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat"
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && 
    query(collection(db, 'users', session.user?.email!, 'chats'))
  );
  console.log(chats);
  
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                <NewChat />
                
                <div>
                    {/* ModelSelection */}
                </div>

                {/* Map through the chatRows */}
                {chats?.docs.map(chat => (
                  <ChatRow key={chat.id} id={chat.id}/>
                ))}
            </div>
        </div>

        {session &&(
          <img onClick={() => signOut()} className="rounded-full h-12 w-12 mx-auto cursor-pointer mb-2 hover:opacity-50" src={session.user?.image!} alt='profile pic'/>
        )}
    </div>
  )
}

export default SideBar;