"use client";

import { User, searchAllUsers } from "@/app/actions";
import { AsyncSelect } from "@/components/async-select";
import { useState } from "react";

export default function AsyncSelectExample() {
  const [selectedUser, setSelectedUser] = useState<string>("");

  return (
    <AsyncSelect<User>
      fetcher={searchAllUsers}
      preload
      filterFn={(user, query) => user.name.toLowerCase().includes(query.toLowerCase())}
      renderOption={(user) => (
        <div className="flex items-center gap-2">
          {/* <Image
            src={user.avatar}
            alt={user.name}
            width={24}
            height={24}
            className="rounded-full"
          /> */}
          <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
            {user.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <div className="font-medium">{user.name}</div>
            <div className="text-xs text-muted-foreground">{user.role}</div>
          </div>
        </div>
      )}
      getOptionValue={(user) => user.id}
      getDisplayValue={(user) => (
        <div className="flex items-center gap-2 text-left">
          {/* <Image
            src={user.avatar}
            alt={user.name}
            width={24}
            height={24}
            className="rounded-full"
          /> */}
          <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
            {user.name.charAt(0)}
          </div>
          <div className="flex flex-col leading-tight">
            <div className="font-medium">{user.name}</div>
            <div className="text-xxs text-muted-foreground">{user.role}</div>
          </div>
        </div>
      )}
      notFound={<div className="py-6 text-center text-sm">No users found</div>}
      label="User"
      placeholder="Search users..."
      value={selectedUser}
      onChange={setSelectedUser}
      width="350px"
    />
  )
}