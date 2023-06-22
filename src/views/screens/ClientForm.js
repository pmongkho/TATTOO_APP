import { Autocomplete, Button, TextField } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import '../styles/ClientForm.css'
import { styled } from '@mui/material/styles'
// import { Box } from "@mui/system";
// import { redirect, useNavigate } from "react-router-dom";

function ClientForm() {
	const [style, setStyle] = useState('')
	const [phone, setPhone] = useState('')
	const [name, setName] = useState('')
	const [placement, setPlacement] = useState('')
	const [text, setText] = useState('')
	const [imagesPreview, setImagesPreview] = useState([])
	const [images, setImages] = useState([])
	const [authToken, setAuthToken] = useState('')

	const Input = styled('input')({
		display: 'none',
	})

	const fileSelectHandler = (e) => {
		const files = Array.from(e.target.files)
		setImagesPreview([])
		files.forEach((file) => {
			setImagesPreview([...imagesPreview, URL.createObjectURL(file)])
		})

		setImages(e.target.files[0])
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const formData = {
			name,
			phone,
			style,
			images,
			placement,
			text,
		}

		setStyle('')
		setName('')
		setPhone('')
		setImages([])
		setImagesPreview([])
		setPlacement('')
		setText('')
	}

	const tattooStyles = [
		{ label: 'Traditional' },
		{ label: 'Neo Traditional' },
		{ label: 'Traditional' },
		{ label: 'Fine Line' },
		{ label: 'Tribal' },
		{ label: 'Watercolor' },
		{ label: 'Blackwork' },
		{ label: 'Color Realism' },
		{ label: 'Japanese' },
		{ label: 'Trash Polka' },
		{ label: 'Geometric' },
		{ label: 'Black & Grey Realism' },
		{ label: 'Micro' },
		{ label: 'Cartoon' },
		{ label: 'Continuous Line Contour' },
		{ label: 'Portrait' },
		{ label: 'Pet and Animal' },
	]

	return (
		<div className='flex items-center justify-center text-center bg-white h-full mb-20'>
			<div className=' bg-white p-5 w-full '>
				<h1 className=' m-3 text-3xl'>Tattoo Inquiry</h1>
				<div className='my-5'>
					<TextField
						className='w-full'
						sx={{ input: { color: ' ' } }}
						helperText='Please enter your name'
						id='demo-helper-text-aligned'
						label='Name'
						color='primary'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='my-5'>
					<TextField
						className='w-full'
						sx={{ input: { color: ' ' } }}
						helperText='Please your phone number'
						id='demo-helper-text-aligned'
						label='Phone Number'
						color='primary'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className=' my-5'>
					<Autocomplete
						className='w-full'
						disablePortal
						defaultValue=''
						inputValue={style}
						onInputChange={(_, style) => {
							setStyle(style)
						}}
						id='combo-box-demo'
						options={tattooStyles}
						renderInput={(params) => (
							<TextField
								sx={{ input: { color: ' ' } }}
								{...params}
								label='Tattoo Style'
							/>
						)}
					/>
				</div>

				<div className='my-5'>
					<div className='flex justify-evenly items-center flex-wrap'>
						{imagesPreview.map((image, index) => (
							<img
								className='w-[100px] h-auto'
								key={index}
								src={image}
								alt='preview'
							/>
						))}
					</div>
					<label htmlFor='contained-button-file'>
						<Input
							className='w-full'
							accept='image/*'
							id='contained-button-file'
							type='file'
							onChange={fileSelectHandler}
						/>
						<Button
							className='w-full'
							variant='contained'
							component='span'
							color='primary'
						>
							<p>Reference Photo</p>
							<PhotoCameraIcon className='mx-5'/>
						</Button>
					</label>
					{/* <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label> */}
				</div>
				<div className=' my-5'>
					<TextField
						className='w-full'
						sx={{ input: { color: ' ' } }}
						helperText='Where do you want it on your body?'
						id='demo-helper-text-aligned'
						label='Placement'
						color='primary'
						value={placement}
						onChange={(e) => setPlacement(e.target.value)}
					/>
				</div>
				<div className='my-5'>
					<TextField
						className='w-full'
						sx={{ input: { color: ' ' } }}
						helperText='Add any additional comments?'
						id='outlined-multiline-flexible'
						label='Additional comments'
						multiline
						color='primary'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>

				<div className='submit'>
					<Button
						className='w-full'
						variant='contained'
						color='primary'
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ClientForm
