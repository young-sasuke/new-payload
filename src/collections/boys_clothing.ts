// src/collections/boys_clothing.ts

import { CollectionConfig } from 'payload'

export const BoysClothing: CollectionConfig = {
  slug: 'boys_clothing',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image_url',
      type: 'text',
    },
    {
      name: 'background_color',
      type: 'text',
      defaultValue: '#FFE3F2FD',
    },
    {
      name: 'category',
      type: 'text',
      defaultValue: 'Boys',
    },
    {
      name: 'is_active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'created_at',
      type: 'date',
    },
    {
      name: 'updated_at',
      type: 'date',
    },
  ],
  timestamps: false,
}

export default BoysClothing
