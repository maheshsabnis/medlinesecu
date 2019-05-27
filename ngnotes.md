https://www.angular.io

github angular changelog --> Contains listings of all version updates
#=================================================================================
Angular Project Creation
1. Angular CLI Template
   1. npm install -g @angular/cli
      1. The 'ng' CLI tool
         1. ng generate <COMPONENT> | <SERVICE> | <PIPE> | <DIRECTIVE>
      2. Provides Scripts for
         1. Build => 100 kb
         2. Test
         3. Production Build  ==> 25 kb
      3. The 'AoT' aka Ahead-of-Time Compiler
2. Angular Framework + WebPack Configiration
   1. Creating Angular App for an explicit integration with
      1. ASP.NET or JSP Spring, etc.
3. ASP.NET Core with Angular 

#=================================================================================
Angular Standard Libs aka packages
1. @angular/core
   1. Contains angular Standard Objects like
      1. Component, NgModule, Injectable, Input, Output, EventListener, etc.
2. @angular/compiler
   1. AoT Compilation and Build Scripts
3. @angular/Command
   1. Default Module Loader for all standard Angular Modules
   2. From Angular 4.0 + @angular/common/http
4. @angular/platform-browser
   1. Contains 'BrowserModule' to manage application loading in browser
5. @angular/platform-browser-dynamic
   1. Contains 'platformBrowserDynamic' object tat is used for the dynamic angular application execution
      1. Databinding
      2. DOM Generation
      3. Events
      4. Used for Error Handling
6. @angular/forms
   1. Forms Programming
7. @angular/router
   1. Routing 
8. @angular/animation
   
#================================================================================
Libraries used by Angular for Application Development
1. rxjs 
   1. Used for Publish / Subscribe pattern for Ajax calls
2. cors-js
   1. Bridge between ES 6 and Browser Comptible JavaScript ES 3
3. zone.js
   1. Used by platformBrowserDybnamic for runtime DOM Validations 

#=================================================================================
Angular Standard Decorators
1. NgModule from @angular/core --> applied as @NgModule
   1. Applied on class to set behavior as Angular Module aka an isolated Angular Application that contains Component/Services/Pipes/Directives, etc.
   2. Properties
      1. imports: Of the type array that imports all standard modules as well as other  exportable modules
         1. Mandatory is The "BrowserModule"
      2. exports: Of the type array that exports contents of current module to other modules
      3. declararations: Of the type array that is used to declare all components/pipes and Directives of current Application
         1. All declarations will be having there object/instance created while bootstrap. This will be used when its is accessed 
      4. providers: Of the type array, used to register all Angular Services those are used for D.I.
         1. This is optional from Angular 6.0+
      5. bootstrap: Of the type array, contains components to be bootstraped  (loaded) in browser
2. Component, from @angular/core --> applied as @Component
   1. Set behavior to class as Angular Component
   2. Propeerties
      1.   selector --> Custom HTML tag that will be added /used to load and render the component
      2.   template --> For Inline HTML Template
      3.   templateUrl --> External Html file











