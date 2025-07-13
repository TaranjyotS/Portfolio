#!/usr/bin/env python3
"""
Backend API Testing Suite for Portfolio Website
Tests all API endpoints and database functionality
"""

import requests
import json
import os
import sys
from datetime import datetime
from typing import Dict, Any

# Get backend URL from frontend environment
def get_backend_url():
    """Get the backend URL from frontend .env file"""
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

class PortfolioAPITester:
    def __init__(self):
        self.base_url = get_backend_url()
        if not self.base_url:
            raise Exception("Could not get backend URL from frontend/.env")
        
        self.api_url = f"{self.base_url}/api"
        self.session = requests.Session()
        self.test_results = []
        
        print(f"Testing Portfolio API at: {self.api_url}")
        print("=" * 60)

    def log_test(self, test_name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"    Details: {details}")
        if response_data and isinstance(response_data, dict):
            if 'error' in str(response_data).lower():
                print(f"    Response: {response_data}")
        
        self.test_results.append({
            'test': test_name,
            'success': success,
            'details': details,
            'timestamp': datetime.now().isoformat()
        })
        print()

    def test_health_check(self):
        """Test the health check endpoint"""
        try:
            response = self.session.get(f"{self.api_url}/")
            
            if response.status_code == 200:
                data = response.json()
                if data.get('message') and data.get('status') == 'healthy':
                    self.log_test("Health Check", True, f"API is healthy: {data['message']}")
                    return True
                else:
                    self.log_test("Health Check", False, f"Unexpected response format: {data}")
                    return False
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Health Check", False, f"Connection error: {str(e)}")
            return False

    def test_get_all_projects(self):
        """Test getting all projects"""
        try:
            response = self.session.get(f"{self.api_url}/projects")
            
            if response.status_code == 200:
                projects = response.json()
                if isinstance(projects, list) and len(projects) > 0:
                    # Verify project structure
                    first_project = projects[0]
                    required_fields = ['id', 'title', 'description', 'technologies', 'live_demo', 'github']
                    missing_fields = [field for field in required_fields if field not in first_project]
                    
                    if not missing_fields:
                        self.log_test("Get All Projects", True, f"Retrieved {len(projects)} projects with correct structure")
                        return True
                    else:
                        self.log_test("Get All Projects", False, f"Missing fields in project: {missing_fields}")
                        return False
                else:
                    self.log_test("Get All Projects", False, f"Expected non-empty list, got: {type(projects)} with {len(projects) if isinstance(projects, list) else 'N/A'} items")
                    return False
            else:
                self.log_test("Get All Projects", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Get All Projects", False, f"Error: {str(e)}")
            return False

    def test_get_featured_projects(self):
        """Test getting only featured projects"""
        try:
            response = self.session.get(f"{self.api_url}/projects?featured=true")
            
            if response.status_code == 200:
                projects = response.json()
                if isinstance(projects, list):
                    # Verify all returned projects are featured
                    non_featured = [p for p in projects if not p.get('featured', False)]
                    
                    if len(non_featured) == 0 and len(projects) > 0:
                        self.log_test("Get Featured Projects", True, f"Retrieved {len(projects)} featured projects")
                        return True
                    elif len(projects) == 0:
                        self.log_test("Get Featured Projects", False, "No featured projects found - check seeding")
                        return False
                    else:
                        self.log_test("Get Featured Projects", False, f"Found {len(non_featured)} non-featured projects in featured results")
                        return False
                else:
                    self.log_test("Get Featured Projects", False, f"Expected list, got: {type(projects)}")
                    return False
            else:
                self.log_test("Get Featured Projects", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Get Featured Projects", False, f"Error: {str(e)}")
            return False

    def test_get_skills(self):
        """Test getting skills"""
        try:
            response = self.session.get(f"{self.api_url}/skills")
            
            if response.status_code == 200:
                skills = response.json()
                if isinstance(skills, list) and len(skills) > 0:
                    # Verify skill structure
                    first_skill = skills[0]
                    required_fields = ['id', 'category', 'skills']
                    missing_fields = [field for field in required_fields if field not in first_skill]
                    
                    if not missing_fields:
                        # Verify skills array is not empty
                        if isinstance(first_skill['skills'], list) and len(first_skill['skills']) > 0:
                            self.log_test("Get Skills", True, f"Retrieved {len(skills)} skill categories")
                            return True
                        else:
                            self.log_test("Get Skills", False, "Skills array is empty in first category")
                            return False
                    else:
                        self.log_test("Get Skills", False, f"Missing fields in skill: {missing_fields}")
                        return False
                else:
                    self.log_test("Get Skills", False, f"Expected non-empty list, got: {type(skills)} with {len(skills) if isinstance(skills, list) else 'N/A'} items")
                    return False
            else:
                self.log_test("Get Skills", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Get Skills", False, f"Error: {str(e)}")
            return False

    def test_get_biography(self):
        """Test getting biography"""
        try:
            response = self.session.get(f"{self.api_url}/biography")
            
            if response.status_code == 200:
                bio = response.json()
                if isinstance(bio, dict) and 'content' in bio and bio['content']:
                    content_length = len(bio['content'])
                    self.log_test("Get Biography", True, f"Retrieved biography with {content_length} characters")
                    return True
                else:
                    self.log_test("Get Biography", False, f"Invalid biography format or empty content: {bio}")
                    return False
            else:
                self.log_test("Get Biography", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Get Biography", False, f"Error: {str(e)}")
            return False

    def test_contact_form_submission(self):
        """Test contact form submission"""
        try:
            # Test data
            contact_data = {
                "name": "Sarah Johnson",
                "email": "sarah.johnson@techcorp.com",
                "message": "Hello! I'm impressed by your portfolio and would love to discuss a potential collaboration opportunity. We're looking for a talented full-stack developer to join our team on an exciting e-commerce project. Would you be interested in a brief call to discuss this further?"
            }
            
            response = self.session.post(
                f"{self.api_url}/contact",
                json=contact_data,
                headers={'Content-Type': 'application/json'}
            )
            
            if response.status_code == 201:
                result = response.json()
                if isinstance(result, dict) and 'id' in result:
                    # Verify the returned data matches what we sent
                    if (result.get('name') == contact_data['name'] and 
                        result.get('email') == contact_data['email'] and 
                        result.get('message') == contact_data['message']):
                        self.log_test("Contact Form Submission", True, f"Message submitted successfully with ID: {result['id']}")
                        return True
                    else:
                        self.log_test("Contact Form Submission", False, "Returned data doesn't match submitted data")
                        return False
                else:
                    self.log_test("Contact Form Submission", False, f"Invalid response format: {result}")
                    return False
            else:
                self.log_test("Contact Form Submission", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Contact Form Submission", False, f"Error: {str(e)}")
            return False

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        try:
            # Test with invalid email
            invalid_data = {
                "name": "Test User",
                "email": "invalid-email",
                "message": "This should fail due to invalid email"
            }
            
            response = self.session.post(
                f"{self.api_url}/contact",
                json=invalid_data,
                headers={'Content-Type': 'application/json'}
            )
            
            if response.status_code == 422:  # Validation error
                self.log_test("Contact Form Validation", True, "Correctly rejected invalid email format")
                return True
            else:
                self.log_test("Contact Form Validation", False, f"Expected validation error (422), got HTTP {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Contact Form Validation", False, f"Error: {str(e)}")
            return False

    def test_database_seeding(self):
        """Test that database was properly seeded"""
        try:
            # Check if we have the expected number of projects
            projects_response = self.session.get(f"{self.api_url}/projects")
            skills_response = self.session.get(f"{self.api_url}/skills")
            bio_response = self.session.get(f"{self.api_url}/biography")
            
            if all(r.status_code == 200 for r in [projects_response, skills_response, bio_response]):
                projects = projects_response.json()
                skills = skills_response.json()
                bio = bio_response.json()
                
                # Check expected counts based on seed data
                expected_projects = 5  # From seed_data.py
                expected_skills = 5    # From seed_data.py
                
                projects_ok = len(projects) == expected_projects
                skills_ok = len(skills) == expected_skills
                bio_ok = bio and 'content' in bio and len(bio['content']) > 100
                
                if projects_ok and skills_ok and bio_ok:
                    self.log_test("Database Seeding", True, f"Found {len(projects)} projects, {len(skills)} skill categories, and biography")
                    return True
                else:
                    issues = []
                    if not projects_ok:
                        issues.append(f"projects: expected {expected_projects}, got {len(projects)}")
                    if not skills_ok:
                        issues.append(f"skills: expected {expected_skills}, got {len(skills)}")
                    if not bio_ok:
                        issues.append("biography: missing or too short")
                    
                    self.log_test("Database Seeding", False, f"Seeding issues: {', '.join(issues)}")
                    return False
            else:
                self.log_test("Database Seeding", False, "Failed to fetch data for seeding verification")
                return False
                
        except Exception as e:
            self.log_test("Database Seeding", False, f"Error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all tests and return summary"""
        print("Starting Portfolio API Test Suite")
        print("=" * 60)
        
        tests = [
            self.test_health_check,
            self.test_database_seeding,
            self.test_get_all_projects,
            self.test_get_featured_projects,
            self.test_get_skills,
            self.test_get_biography,
            self.test_contact_form_submission,
            self.test_contact_form_validation
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            try:
                if test():
                    passed += 1
            except Exception as e:
                print(f"❌ FAIL {test.__name__}: Unexpected error: {str(e)}")
        
        print("=" * 60)
        print(f"TEST SUMMARY: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 ALL TESTS PASSED! Backend API is working correctly.")
        else:
            print(f"⚠️  {total - passed} tests failed. Check the details above.")
        
        return passed == total

def main():
    """Main test execution"""
    try:
        tester = PortfolioAPITester()
        success = tester.run_all_tests()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"❌ CRITICAL ERROR: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()