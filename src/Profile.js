import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

const UserProfile = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        profileImage: null,
    });

    // Handle change in text inputs
    const handleInputChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    // Handle image file change
    const handleImageChange = (e) => {
        setProfileData({ ...profileData, profileImage: e.target.files[0] });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', profileData.name);
        formData.append('email', profileData.email);
        formData.append('profileImage', profileData.profileImage);

        // Replace with your API endpoint
        const response = await axios.post('/api/update-profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(response.data);
        // Handle the response as needed
    };

    return (
        <Container className="profile-container">
            <Row>
                <Col md={6} className="m-auto">
                <Form onSubmit={handleSubmit} style={{ color: '#007bff' }}>
                            <h2 className="text-center mb-4" style={{ color: '#007bff' }}>User Profile</h2>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={profileData.name} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={profileData.email} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control type="file" name="profileImage" onChange={handleImageChange} />
                            </Form.Group>

                            {profileData.profileImage && (
                                <Image src={URL.createObjectURL(profileData.profileImage)} alt="Profile" thumbnail fluid className="mb-3" />
                            )}

                            <Button variant="primary" type="submit">
                                Update Profile
                            </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
    };

export default UserProfile;
