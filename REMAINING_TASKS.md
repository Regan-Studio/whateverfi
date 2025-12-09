# whateverFi - Final Task List for Production Push

**Objective:** Complete all remaining features to achieve a production-ready MVP by tomorrow. This is our "all hands on deck" final sprint.

---

### **Category 1: Advanced Authentication (In Progress)**

#### **Task #9 & #10: Magic Link Authentication (Frontend Flow)**
*   **Status:** In Progress
*   **Objective:** Allow users to log in without a password by clicking a unique link sent to their email.
*   **Action Items (Frontend):**
    1.  Implement the `VerifyMagicPage.tsx` component. It must read the `token` from the URL parameters.
    2.  On page load, it should make a `POST` request to `/api/auth/verify-magic-link` with the token.
    3.  If successful, the backend will return a user object and JWT. The frontend must log the user in (using `AuthContext`) and redirect to the homepage (`/`).
    4.  If the token is invalid or expired, it should display an error message and provide a link back to the magic link request page.
*   **Verification:** A user can successfully log in by using the link generated in the server console.

#### **Task #14: Forgot Password Flow (Frontend Flow)**
*   **Status:** Not Started
*   **Objective:** Provide a secure way for users to reset their forgotten passwords.
*   **Action Items (Frontend):**
    1.  Create `ForgotPasswordPage.tsx`: A form that takes an email and sends a `POST` request to `/api/auth/forgot-password`.
    2.  Create `ResetPasswordPage.tsx`: This page will be linked from the simulated email. It must read the `token` from the URL. It will have a form for "New Password" and "Confirm New Password".
    3.  On submit, it sends a `POST` request to `/api/auth/reset-password/:token` with the new password.
    4.  On success, show a success message and redirect to the `/login` page.
*   **Verification:** A user can request a reset link, use the link from the console to set a new password, and then log in with the new password.

---

### **Category 2: Core Features & Content**

#### **Task #1: Content Editing (Idea)**
*   **Status:** Not Started
*   **Objective:** Allow the original author of an idea to edit its content.
*   **Action Items (Backend):**
    1.  Create an `updateIdea` controller. It must verify that `req.user.id` matches the `idea.author`.
    2.  Create a `PUT /api/ideas/:id` route protected by `requireAuth`.
*   **Action Items (Frontend):**
    1.  In `IdeaModal.tsx`, add an "Edit Idea" button that is only visible if `currentUser.id === idea.author`.
    2.  Clicking "Edit" should open the `SubmitIdeaModal`, pre-filled with the existing idea's data.
    3.  `SubmitIdeaModal` needs to be refactored to handle both "create" and "edit" modes. In edit mode, it should submit a `PUT` request to `/api/ideas/:id`.
*   **Verification:** A logged-in user can edit their own ideas but cannot see the edit button on ideas created by others.

#### **Task #32: User Profile Customization (Avatar Upload)**
*   **Status:** Not Started
*   **Objective:** Allow users to upload a profile picture instead of just providing a URL.
*   **Action Items (Backend):**
    1.  Add `multer` to handle `multipart/form-data`.
    2.  Create a `POST /api/users/profile/avatar` endpoint.
    3.  This endpoint will process the uploaded file (for now, we can just save it to a local `/uploads` directory and return the path). *Note: Production would use a cloud service like S3.*
    4.  Update the `User` model to store the path to the avatar.
*   **Action Items (Frontend):**
    1.  In `SettingsPage.tsx`, replace the avatar URL input with a file input field.
    2.  Implement the client-side logic to upload the selected image file to the new backend endpoint.
    3.  Update the `Header` and `ProfilePage` to display the uploaded image.
*   **Verification:** A user can upload an image on the settings page, and it appears in their profile and the header.

---

### **Category 3: AI & Backend Finalization**

#### **Task #21: AI Remix Feature (Backend)**
*   **Status:** In Progress (Frontend mock exists, backend missing)
*   **Objective:** Fully implement the `generateRemix` function to have the AI create a variation of an existing idea.
*   **Action Items (Backend):**
    1.  In `server/services/geminiService.js`, fully implement the `generateRemix` function.
    2.  The prompt should instruct the AI to return a JSON object with the *same structure* as an `Idea`, but with modified content (e.g., new title, description, targeted at a different industry).
    3.  Create a corresponding `remixIdea` controller in `aiController.js` and a `POST /api/ai/remix` route.
*   **Action Items (Frontend):**
    1.  Update `client/services/geminiService.ts` to call the new `/api/ai/remix` endpoint.
    2.  Ensure the `IdeaModal` correctly handles the remixed idea response.
*   **Verification:** Clicking the "Remix" button in the `IdeaModal` successfully generates and displays a new, AI-modified idea.

---

### **Category 4: Deployment & Operations**

#### **Task #47: CI/CD Pipeline Enhancement**
*   **Status:** In Progress (Basic file exists)
*   **Objective:** Make the CI/CD pipeline more robust.
*   **Action Items (DevOps):**
    1.  Update `.github/workflows/ci.yml`.
    2.  Add a step to `npm install` and `npm run build` in the `client` directory to catch frontend build errors.
    3.  Add a linting step (`eslint` or similar) for both client and server.
*   **Verification:** Pushing code to GitHub automatically runs backend tests AND a frontend build. A pull request with a linting error fails the check.
