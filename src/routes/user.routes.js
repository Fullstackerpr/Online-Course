import { Router } from "express";
import { UserController } from "../controller/user.controller.js";
// import { JwtAuthGuard } from "../middleware/jwt.auth.guard.js";
// import { SelfGuard } from "../middleware/self.guard.js";
// import { AdminGuard } from "../middleware/admin.guard.js";
// import { SuperAdminGuard } from "../middleware/superadmin.guard.js";

const router = Router();
const controller = new UserController();


router
    .post('/', controller.createUser)
    .post('/superadmin', controller.createSuperAdmin)
    .post('/admin', controller.createAdmin)


    .post('/author', controller.createAuthor)
    .post('/signin', controller.signinUser)
    .post('/confirm', controller.confirmUser)
    .post('/signout', controller.signOutUser)
    .post('/token', controller.accessToken)


    .get('/user', controller.getAllUser)
    .get('/admin', controller.getAllAdmin)
    .get('/author', controller.getAllAuthor)
    .get('/:id', controller.getByIdUser)


    .patch('/admin/:id',  controller.updateUser)
    .patch('/superadmin/:id', controller.updateUser)
    .patch('/user/:id', controller.updateUser)
    .patch('/author/:id', controller.updateUser)


    .delete('/:id', controller.deleteUser)
    .delete('/:id', controller.deleteUser)

export default router;