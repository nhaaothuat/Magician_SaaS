import { authMiddleware } from "@clerk/nextjs";
 

// sau khi ao nick thi se tro ve trang login
export default authMiddleware({
  publicRoutes: ["/","/api/webhooks/clerk"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};