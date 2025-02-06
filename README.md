This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Fork or download this project: https://github.com/charlesrelleta/front-end-code-challenge/edit/main/README.md, then:

```sh
# install dependencies
yarn install

# Run the api
yarn watch:api
```

The api will start running at `http://localhost:4001`.

On the Web Application, First,

On the file next.config.ts at the root directory,
set the NEXT_PUBLIC_BASE_PATH equal to the api URL or `http://localhost:4001` upon running locally

```sh
# install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**How to Use the Drone Control App**

### **1. Overview**

This application allows you to control drones using predefined directional commands, capture photos, and view billboard data.

### **2. Navigating the Interface**

- The main screen consists of a title, an interactive particle background, and control buttons for drone navigation.
- A grid at the bottom displays billboards received from the server.

### **3. Controlling the Drone**

- Click on the directional icons to send movement instructions:
  - **Up (\^)** – Move the drone upwards.
  - **Down (v)** – Move the drone downwards.
  - **Left (<)** – Move the drone to the left.
  - **Right (>)** – Move the drone to the right.
- Click the **Camera (x) icon** to capture a photo.
- The selected set of instructions is displayed below the controls.

### **4. Submitting and Resetting Instructions**

- Click the **Submit** button to send the instructions to the drone.
- Click the **Reset** button to clear all instructions and reset the billboard grid.

### **5. Viewing Billboard Details**

- When the drone completes an operation, it may retrieve billboard data, displayed in the grid.
- Clicking on a billboard card will fetch additional details about it.
- Billboard details include:
  - **Advertiser name**
  - **Location**
  - **Billboard message**
  - **Number of photos taken**
  - **Image preview**

### **6. UI & Animations**

- Hovering over action buttons scales them up slightly for better interaction feedback.
- Animations are applied to the billboards for a smooth loading experience.

### **7. Troubleshooting**

- If no billboards appear after submitting, ensure valid instructions are entered.
- If billboard details do not load, check the console for errors.

### **8. Future Enhancements**

- Real-time drone position tracking.
- More detailed analytics on drone movements.
- Expanded set of drone actions beyond movement and capturing images.
