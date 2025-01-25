import { Home, Users, LayoutGrid, MessageCircle, User } from "lucide-react"
import Link from "next/link"

export function BottomNav() {
  return (
    <nav className="max-w-[470px] w-full mx-auto fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
      <div className="flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center text-primary">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/community" className="flex flex-col items-center text-gray-500">
          <Users className="w-6 h-6" />
          <span className="text-xs mt-1">Community</span>
        </Link>
        <Link href="/contents" className="flex flex-col items-center text-gray-500">
          <LayoutGrid className="w-6 h-6" />
          <span className="text-xs mt-1">Contents</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center text-gray-500">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs mt-1">Chat</span>
        </Link>
        <Link href="/my-info" className="flex flex-col items-center text-gray-500">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">My Info</span>
        </Link>
      </div>
    </nav>
  )
}

