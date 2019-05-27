ES 6 --> TypeScript, ES 6 aka Hight-Level JavaScript, Dart
Modern JavaScript with features like
1. Object Oriented Programming
2. Arrow Operators
3. Immutable Strings aka Template Strings.
4. Modules
5. Promises
   1. Solution for CallBacks and Async operations
6. Block-Scope Declarations
7. DataTypes (Limited to TypeScript Only)
#=================================================================================
# install TypeScript
npm install -g typescript
1. This will install TypeScript in Global Scope
   1. c:\Users\<UserName>\AppData\Roaming\npm\tsc.exe
2. The 'tsc' is a TypeScript Transpiler (Transform after Compilation)
   1. tsc <File-Name>.ts --> Produces <File-Name>.js
3. Create package.json for current Project
   1. npm init --> Command to create package.json using command-line wizard
   2. npm init -y to create package.json with default settings (Recommended)
   3. package.json Objects aka sections
      1. 'scripts' --> Listings of all commands as follows for application
         1. compile
         2. build
         3. test
         4. prod
         5. run
      2. 'deDependencies'
         1. Section that contains listings of all packages used for application development and Build purpose
         2. Packages for devDependencies can be installed using following command
            1. npm install --save-dev <PACKAGE-NAME>@vserion
            2. npm install --save-dev typescript
      3. 'dependencies'
         1. Production Runtime Dependencies
            1. npm install <PACKAGE-NAME> from the current project path

#=======================================================================================================================
TypeScript Programming
1. Block-Scope decelarations using 'let' keyword
2. DataTypes
   1. Number
   2. String
   3. Date
   4. Boolean
   5. Array<T>
   6. Type
   7. Tuple --> Implementation of Array to use as Dictionary
   8. any
   9. UnionType
      1.  Combination of More than one DataType declaration for variable.
      2.  Typically this is used to store data received from external sources e.g. AJAX callss when the datatype of received data is not known or partially known
      3.  Syntax
          1.  let <identityfier>: <Type1>|<Type2> 
3.  Array Type System
    1.  Array Implicite Declaration
        1.  let <identifier> = [];
    2.  Explicit Type
        1.  let <identifier>:Array<T> = new Array<T>();
    3.  Methods
        1.  push()/pop()
        2.  Iterations
            1.  forEach()
            2.  map()
            3.  for..of loop new in ES 6
                1.  Internally used 'Iterators'
        3.  Conditional Iterations
            1.  filter()
            2.  find() not in Typescript
        4.  reduce() 
    4.  Generate tsconfig.json file
        1.  tsc --init command
    5.  Use 'Arrow Operators' as a input parameter to method that accepts callback-function as input parameter
        1.  older
            1.  array.forEach(function(v,idex){....})
        2.  New Syntax with Arrow operator
            1.  array.forEach((v,idx)=>{.....})
4.  Template-String
    1.  Immutable string objects that containe static string data anf variable data in single string object.
    2.  We can parse HTML string as HTML DOM using Template string. Uses extensively by Angular
    3.  Syntax
        1.  `My Name is ${identifier}`
        2.  ${identifier} is called as Template Expression

#=================================================================================
Object Oriented Programming
1. class
   1. constructor
   2. Default 'public' access specifier for members and functions (methods)
   3. private, protected
   4. (function(){....})(); --> Immediately Invocable Function Expression (IIFE)
   5. constructor
      1. With Default Constructor parameter
      2. With private ctor parameters
         1. Scoped to ctor and the class
      3. With public ctor parameters
         1. Scoped to ctor, within class and out-side class using its instance
   6. Can implement Interface using 'implements' keyword.
   7. Can have getter and Setter properties aka smart fields
      1. get always returns data
      2. set always accepts data 
      3. Read/Write and Read-Only properties
   8. Generic Class, Method, Member
   9. Using 'extends' keyword class can be derived 
   10. No overloading for methods (also for constructor) by default instead use 'rest' parameters 
       1.  internally is an 'arguments' array
       2.  syntax is 
           1.  ...arr:[]
               1.  ... (3 dots) are knows as 'spread' operators
2.  Modules (Server-Side concept and not for Browser)
    1.  export type
    2.  import type
3.  Decorators
    1.  Metadata of Ts Types



