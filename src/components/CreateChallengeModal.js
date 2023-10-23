import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CreateChallengeModal({
  open,
  onClose,
  newChallenge,
  handleInputChange,
  handleCreateChallenge,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField
              name="name"
              label="Challenge Name"
              fullWidth
              value={newChallenge.name}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              name="description"
              label="Description"
              multiline
              fullWidth
              value={newChallenge.description}
              onChange={handleInputChange}
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="creator">Creator</InputLabel>
              <Select
                value={newChallenge.creator}
                onChange={handleInputChange}
                inputProps={{
                  name: 'creator',
                  id: 'creator',
                }}
              >
                <MenuItem value={101}>John Doe</MenuItem>
                {/* Add more users here */}
              </Select>
            </FormControl>
            <TextField
              name="startDate"
              label="Start Date"
              type="date"
              fullWidth
              value={newChallenge.startDate}
              onChange={handleInputChange}
              margin="normal"
              InputProps={{ placeholder: '' }} // Add this line
            />
            <TextField
              name="endDate"
              label="End Date"
              type="date"
              fullWidth
              value={newChallenge.endDate}
              onChange={handleInputChange}
              margin="normal"
              InputProps={{ placeholder: '' }} // Add this line
            />
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                aria-label="Visibility"
                name="visibility"
                value={newChallenge.visibility}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="public"
                  control={<Radio />}
                  label="Public"
                />
                <FormControlLabel
                  value="private"
                  control={<Radio />}
                  label="Private"
                />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleCreateChallenge}>
              Publish
            </Button>
      </Box>
    </Modal>
  );
}
