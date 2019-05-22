# EF Core
1. DbContext class
   1. Manage Connections
   2. Map CLR Objects with Tables
      1. DbSet<T>
         1. T is the Entity Mapped with Table with name as T
   3. Manage Db Transactions    
      1. SaveChanges()
   4. Async Programming
      1. SaveChangesAsync()
2. ctx is an instance of DbContext and DbSet<T>, T is Employee and DbSet<T> is Employees then
   1. Read All
      1. var emps =  ctx.Employees.ToListAsync();
   2. Read Single Record based in P.K.
      1. var emps = ctx.Employees.Find(P.K.);
   3. To Create a new Record aka Append Record
      1. Define an instance of Employee class
      2. Set its property values
      3. ctx.Employees.AddAsync(empObj);
      4. ctx.SaveChangesAsync()
   4. To Update Record
      1. Search Record based on P.K.
      2. Update its property Values
      3. Call SaveChanges()
   5. To Delete Record
      1. Search record based on P.K.
      2. Pass it to Remove() method of DbSet
      3. Call SaveChanges()
3. IServiceCollection
   1. Interface for Registering "Services(?)" in default DI Container of ASP.NET Core
      1. Services
         1. DAL
         2. Repositories
         3. Business or Domain Workflow
         4. Third-Party Package Interfaces
      2. Default Services
         1. DbContext
         2. Authentication and Authorization
         3. CORS
         4. Role Policies
         5. MVC (if MVC App)
   2. DI Registration Rules
      1. Transient Object Registration
         1. Stateless Object Registration, instance will be created for each request
         2. services.AddTransient<T,U>();
            1. T is type aka interface type
            2. U is type implementing T interface
         3. services.AddTransient<T>();
            1. T is type aka class
      2. Scopped Object Registration
         1. Statefull, object will be created for each new session
            1. services.AddScopped<T,U>();
            2. services.AddScopped<T>()
         2. Services.AddDbContext();
      3. SingleTon
         1. services.AddSingleton<T,U>();

#############################################################################
ASP.NET Core WEB API
1. ApiController
   1. Attribute class applied on Controller to set behavior (execution) for WEB API.
   2. HttpRequest
      1. Header
         1. URL/Method/id
         2. Content-Type
            1. MediaFormatter --> The Expected Response from API
         3. Accept --> What is expected by client
               1. MediaFormatter
         4. Type
            1. GET/POST/PUT/DELETE
               1. Instruction to WEB API to Map the request to corresponding methods.
         5. AUTHORIZATION
            1. scehma --> Basic/basic OR bearer
      2. Body
         1. x-www-encoded
            1. URL Parameters key=value&
         2. application/json {}
         3. X-Form
   3. IActionResult
      1. Response-Type from Http-Action Methods from WEB API
         1. Ok, NotFound, BadRequest, etc
##################################################################################
Programming with WEB API Core
1. Validations
2. Exceptions
   1. Filters
      1. To implement MVC / WEB API Based Utilities
         1. Logging
         2. Exception
      2. ActionContext the base class, used during Filter execution
         1. Use "RouteData" class to Read Routing Information
            1. Controller Name
            2. Action Name 
   2. Middlewares
      1. Class that is typed to UseMiddleware<T>() method of IApplicationBuilder
      2. The 'T' is a class that is
         1. Constructor Injected with 'RequestDelegate'
            1. RequestDelegate
               1. Delegate that Process Current HttpRequest in HttpContext
         2. An 'InvokeAsync()' method
            1. First Parameter is HttpContext
            2. Contains Logic for Middleware
3. Security --> Microsoft.AspNetCore.Identity Package and Microsoft.AspNetCore.Identity.EntityFrameworkCore
   1. UserManager
      1. Used to Manage app users using IdentityUser class
         1. IdentityUser
            1. Email
            2. Password
            3. ConfirPassword
            4. Phone
      2. CreateUserAsync()
   2. RoleManager
      1. Used to manage Application Roles using IdentityRole class
   3. ClaimIdentity
      1. Policy Calss to provide App accesses based on User and Role Claims
   4. IServiceCollection.AddDefaultIdentity<IdentityUser>()
      1. User Management
        
   5. Tokens
4. Customizing Models
   1. Http Method Templates
      1. If we have Http methods with muti-premptive parameters then use HTTP Method string templates
         1. [Http<METHOD>("{}/{}/{}.....")]
         2. Note more than 1024 chars in length
   2. ViewModels
   3. Message Formatters
5. Deployment
   1. IIS


