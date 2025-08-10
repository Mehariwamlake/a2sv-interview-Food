'use client'
import React from 'react'
import { Food } from '@/types/Food'

export default function RestaurantCard({ food, onEdit, onDelete }: { food: Food; onEdit: () => void; onDelete: () => void }) {
  return (
    <article className="restaurant-card" data-testid={`restaurant-card-${food.id}`}>
      <img src={food.image} alt={food.name} className="restaurant-image" />
      <div className="restaurant-body">
        <h3 className="restaurant-name">{food.name}</h3>
        <p className="restaurant-rating">Rating: {food.rating}</p>
        <p className="restaurant-status">{food.open}</p>
        <div className="restaurant-actions">
          <button className="restaurant-edit" onClick={onEdit} data-testid="restaurant-edit-btn">Edit</button>
          <button className="restaurant-delete" onClick={onDelete} data-testid="restaurant-delete-btn">Delete</button>
        </div>
      </div>
    </article>
  )
}