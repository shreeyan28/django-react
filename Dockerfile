# Use an official Python runtime as a parent image
FROM python:3.9


# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install djangorestframework
RUN pip install django-cors-headers

# Make port 8000 available to the world outside this container
EXPOSE 8080
# Define environment variable
ENV NAME World
# Define the command to run your app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]
