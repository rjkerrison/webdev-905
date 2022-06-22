import React from 'react'

const Input = ({
  label,
  name: fieldName,
  placeholder,
  formData,
  setFormData,
  type = 'text',
}) => {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <input
        type={type}
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        value={formData[fieldName]}
        onChange={(event) => {
          setFormData({
            ...formData,
            [fieldName]: event.target.value,
          })
        }}
      />
    </div>
  )
}

export default Input
