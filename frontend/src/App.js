
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentScreen from "./screens/PaymentScreen";
import TrainerScreen from "./screens/TrainerScreen";
import MyProfileScreen from './screens/MyProfileScreen';
import AllWorkoutScreen from "./screens/AllWorkoutScreen";
import MyWorkoutsScreen from "./screens/MyWorkoutsScreen";
import AllprogramsScreen from "./screens/AllprogramsScreen";
import ManagePrograms from "./screens/Admin/ManagePrograms";
import ProgramWiseScreen from "./screens/ProgramWiseScreen";
import ViewUserScreen from "./screens/Trainer/ViewUserScreen";
import AdminLoginScreen from "./screens/Admin/AdminLoginScreen";
import ManageUserScreen from "./screens/Admin/ManageUserScreen";
import AddProgramScreen from "./screens/Admin/AddProgramScreen";
import SubcribedWorkouts from "./screens/SubcribedWorkoutsScreen";
import WorkoutDetailsScreen from "./screens/WorkoutDetailsScreen";
import AddWorkoutScreen from "./screens/Trainer/AddWorkoutScreen";
import ManageWorkout from "./screens/Trainer/ManageWorkoutScreen";
import WorkoutEditScreen from './screens/Trainer/WorkoutEditScreen';
import AdminMangeWorkouts from "./screens/Admin/AdminMangeWorkouts";
import AdminHomepageScreen from "./screens/Admin/AdminHomepageScreen";
import ManageTrainerScreen from "./screens/Admin/ManageTrainerScreen";
import TrainerLoginScreen from "./screens/Trainer/TrainerLoginScreen";
import AcceptTrainerScreen from "./screens/Admin/AcceptTrainerScreen";
import TrainerSignupScreen from "./screens/Trainer/TrainerSignupScreen";
import TrainerProfileScreen from "./screens/Trainer/TrainerProfileScreen";
import TrainerHomepageScreen from "./screens/Trainer/TrainerHomepageScreen";
import AddBannerScreen from "./screens/Admin/AddBannerScreen";
import AllWorkoutsAdmin from "./components/Admin/AllWorkoutsAdmin";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/workout" element={<AllWorkoutScreen />} />
        <Route path="/myprofile" element={<MyProfileScreen />} />
        <Route path="/admin" element={<AdminHomepageScreen />} />
        <Route path="/trainers/:id" element={<TrainerScreen />} />
        <Route path="/programs" element={<AllprogramsScreen />} />
        <Route path="/addprogram" element={<AddProgramScreen />} />
        <Route path="/manageuser" element={<ManageUserScreen />} />
        <Route path="/viewuser/:id" element={<ViewUserScreen />} />
        <Route path="/myworkouts" element={<MyWorkoutsScreen />} />
        <Route path="/adminlogin" element={<AdminLoginScreen />} />
        <Route path="/manageworkouts" element={<ManageWorkout />} />
        <Route path="/workoutadmin" element={<AllWorkoutsAdmin />} />
        <Route path="/manageprograms" element={<ManagePrograms />} />
        <Route path="/trainer" element={<TrainerHomepageScreen />} />
        <Route path="/programs/:id" element={<ProgramWiseScreen />} />
        <Route path="/trainerlogin" element={<TrainerLoginScreen />} />
        <Route path="/trainer/:id" element={<AcceptTrainerScreen />} />
        <Route path="/manageworkout" element={<AdminMangeWorkouts />} />
        <Route path="/workoutsub/:id" element={<SubcribedWorkouts />} />
        <Route path="/workout/:id" element={<WorkoutDetailsScreen />} />
        <Route path="/managetrainer" element={<ManageTrainerScreen />} />
        <Route path="/chat/:sender/:receiver" element={<ChatScreen />} />
        <Route path='/trainersignup' element={<TrainerSignupScreen />} />
        <Route path="/editWorkout/:id" element={<WorkoutEditScreen />} />
        <Route path="/AddWorkoutScreen" element={<AddWorkoutScreen />} />
        <Route path="/trainerprofile" element={<TrainerProfileScreen />} />
        <Route path="/addbanner" element={<AddBannerScreen />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
