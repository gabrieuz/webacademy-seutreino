import { Client } from "./client.interface"
import { Professional } from "./professional"

export interface ProfissionalReview {
  id?: string      
  rating?: number 
  createdAt?: Date    
  updatedAt?: Date   
  clientId?: string 
  client?: Client   
  professionalId?: string 
  professional?: Professional
  tags?: any[]
}

