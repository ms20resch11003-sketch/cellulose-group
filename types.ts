
export enum UserRole {
  ADMIN = 'ADMIN',
  RESEARCHER = 'RESEARCHER',
  STUDENT = 'STUDENT'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Instrument {
  id: string;
  name: string;
  location: string;
  status: 'available' | 'maintenance' | 'busy';
  description: string;
}

export interface Booking {
  id: string;
  instrumentId: string;
  userId: string;
  startTime: string;
  endTime: string;
  purpose: string;
}

export interface ConsumableRequest {
  id: string;
  item: string;
  quantity: string;
  urgency: 'low' | 'medium' | 'high';
  status: 'pending' | 'ordered' | 'received';
  userId: string;
  createdAt: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  authorId: string;
  date: string;
  category: 'safety' | 'general' | 'achievement';
}
