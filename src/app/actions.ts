'use server'

import { faker } from '@faker-js/faker'

export interface User {
  id: string
  name: string
  email: string
  role: string
  avatar: string
}

// Generate 2000 users once and reuse them
const allUsers = Array.from({ length: 2000 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: faker.person.jobTitle(),
  avatar: faker.image.avatar()
}))

export async function searchUsers(query?: string): Promise<User[]> {
  // Simulate server delay
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 100))

  // If there's a search query, filter the users
  if (query) {
    const lowercaseQuery = query.toLowerCase()
    return allUsers.filter(user => 
      user.name.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 10) // Return only first 10 matches
  }

  // Return first 10 users if no query
  return allUsers.slice(0, 10)
}

export async function searchAllUsers(): Promise<User[]> {
  // Simulate server delay
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 100))

  return allUsers.slice(0, 200)
}