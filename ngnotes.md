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

#================================================================================
src-->app-->components
                  --> folder for each component
                        --> app.<component-name>.component.ts
                        --> app.<component-name>.view.html
                        --> app.<component-name>.css      
         -->models
            --> defining entities
                  --> app.<entity-name>.model.ts
                  --> app.<constant-name>.constant.ts
                  --> app.<logic-name>.logic.ts
         -->services
                  --> app.<service-name>.service.ts
         -->directives
                  --> app.<directive-name>.directive.ts
         -->pipes
                  --> app.<pipe-name>.pipe.ts
         -->views (optional)
         -->logic (optional)     
   --> module
            -->component       

#=================================================================================
Angular DataBinding
1. Interpolation aka Expression Binding
   1. Syntax
      1. {{<PROPERTY-NAME>}}
         1. Read-Only
2. Proprty-Binding
   1. Binds the public member of Component to an Attribute of HTML element using following syntax
      1. [<ATTRONUTE>] = "<PUBLIC MEMBER OF COMPONENT>"
         1. e.g. [value], [href], [checked], [hidden], [visible], [disable], etc.
3. Event Binding
   1. Binds an Event of HTML element with a public method of the Component.
   2. Syntax
      1. (<EVENT-NAME>)="<Function-Name>()"
         1. e.g. (click), (change), (keyup), (mouseenter), etc.
4. Two-Way Binding
   1. The 'ngModel' attribute directive for editable elements
      1. e.g. all input elements, select, textarea.
   2. The 'FormsModule' from @angular/forms must be imported in AppModule class
#================================================================================
Angular Directives
1. Custom behaviors for UI as well as attributes to control or manage rendering
   1. Component Directive
      1. All Custom Components
   2. Structural Directive
      1. Used to Generate DOM Dynamically based on Data-Binding
      2. E.g.
         1. *ngIf --> If Condition
         2. *ngFor --> for..of loop
         3. *ngSwitch and *ngSwitchCase
   3. Attribute Directives    
      1. Additional Behavior to HTML DOM Elements  
         1. E.g.
            1. ngModel
            2. valid / invalid

#================================================================================
Angular Forms
1. Reactive Forms aka Model-Drive-Forms aka Data-Driven-Forms
2. @angular/forms package
   1. ReactiveFormsModule
      1. ngForm maped with <form> tag
         1. ngSubmit event --> Invoke OnSubmit() event on <form>
      2. FormGroup
         1. Collection of FormControls (?) in HTML template
            1. FormControls 
               1. Collection of Each Editable formContol inside <form> tag bind with [formGroup]
               2. The 'formControlName', the property that is used to read name-value pair for Form Posting aka submit
                  1. From NG 6+ either use ngModel without form or use formControlName inside React-Forms
               3. Each formControlName represent an instance of FormContol that is mapped with Entity-class Property. 
               4. formGroup.value provides values for each editable element after submit event
               5. [formGroup] is a custom attribute directive provided by @angular/forms for building Reactive Forms
            2. AbstractControl, the base class that represents each Form Element of which value is read/written
            3. Validators, class that is used to contains model validation Rules in the form of methods
               1. required(AbstractControl)
               2. pattern(string as Regular Expression)
               3. min(number) / max(number)
               4. minLength(number) / maxlength(number)
               5. requiredTrue() value for element must be true
               6. compose(), method to apply or set multiple validations on single property
            4.  The Reactive Form Accessing Structure for Validations
                1.  <FormGroup>.controls.<FormControlName>.dirty
                    1.  The UI ELement is Focused and changed
                2.  !<FormGroup>.controls.<FormControlName>.valid
                3.  <FormGroup>.controls.<FormControlName>.errors.<ValidationRule>
                    1.  E.g. <FormGroup>.controls.<FormControlName>.errors.minlength

#=================================================================================
Angular Component-Communiucation

1. Case 1: Component Knows each-other
   1. One component loads another component using the selector
   2. To pass the data from Container Component aka master to Content Component aka child, the child component must declare public setter and getter property decorated with @Input Decorator
   3. The property Decorated with @Input can be used for 'PROPERTY-BINDING' 
   4. An EventEmitter<T> class is used to emit an event from Component
      1. T is 'payload' that represents the data to be emitted with an event
   5. To receive the data the parent must subscribe to event. This is possible if the EventEmitter is decorated using @Output
      1. The Event Receiver aka subscriber will read the Event Payload using standard '$event' object

#==================================================================
Angular Http Programming
**** @angular/http is depricated
@angular/common/http
1. HttpClientModule
   1. Platform for 'HttpClient' Object and it is used for Async Http Calls.
2. HttpClient
   1. get<T>
      1. T is Observable of <T>
   2. post<T>
   3. put<T>
   4. delete<T>
   5. T can be
      1. BLOB
      2. ArrayBuffer
3. HttpHeader

#=======================================================================================================================
Angular Pipes
1. UX Transformations
   1. By using 'string' conversion for data
   2. PipeTransform interface
      1. transform()
      2. The class decorated with @Pipe({pipename as string})
   3. STandard Pipes 
      1. uppercase / lowercase
      2. short, long, full --> Date pipes
      3. json
      4. async
      5. currency
2. To set value for the filter across UI elements use the 'Template-Field' syntax
   1. Like document.getElementById('id')
      1. syntax
         1. <input type="text" #prd>

Angular Directives
1. Custom Behaviors set for DOM Attributes
2. Class decorated with @Directive({selector:'[<SELECTOR-NAME>]'})
   1. Input Decorated property(ies), at least one property must map with directive selector
      1. @Input('<SELECTOR-NAME>')color:string; 
      2. HostListener Decoarator applied on methods of directive to listen the condition to activate directive 
         1. @HostListener('<Actual-JavaScript-Event>') method(){....}
   2. Renderer, the class used to manage the Rendering after directive is activated
   3. ElementRef, the class that detectes the DOM element using which the directive will be affected

#=================================================================================

Angular SPA
1. @angular/router
   1. RouterModule
      1. Container for Managing Application Routes
      2. forRoot(<RouteTable>)
         1. Load Route Table for Root of the application aka RootModule
      3. forChild(<RouteTable>)
         1. Load Router Table for Children aka Lazy-Loading
   2. Routes
      1. JSON Dictionary for Route Expressions aka Route Table
      2. Each entry in RouteTable is Route, it is a JSON Object with folowing properties
         1. path
         2. component
         3. children of the type RouteTable aka subrouting or child routing or nested routing
         4. loadChildren, lazy load routing
            1. path.module#<MODULENAME>
         5. redirectTo
         6. match
   3. Router
      1. Class used to query to Route Table for Event-Based Explicit Route
   4. ActivatedRoute
      1. Class used to subscribe to current active route and read route parameters
      2. {path:'<URI>/:<parameter>'}
   5. CanActivate
      1. Conditional Routing, generally used for Role-Based-Security Conditional Routing aka AuthGuards
   6. RouterLink
      1. The attribute directive linked with <a> tag to query to Route Table for Navigation
         1. <a [routerLink]="['<URI From Route Table>']"></a>
         2. If the routerLink contains path with parameters then mandatory syntax is
            1. [routerLink]="['/<URI>',<parameter-identifier>]"
   7. RouterOutlet
      1. The standard component that acts as a container for Route-Navigation, a <div> tag
         1. <router-outlet></router-outlet>  
#=================================================================================

















