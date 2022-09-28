# Module 1
- **describe**: The metlhod that contains the artifact that we will to test and all of
    your tests(**it**)
- For default the angular uses the jasmine as test framemework
- The karma is respponible for execute the tests, he'is framework agnostic, can be used
      with anyother test framework (jasmine, Mocha, QUnit) 

# Module 2
- The execution of karma tests is random to avoid errors from shared instances between tests
- Use the **BeforeEach** method to share objects instances between the tests executions
- **withContext**: Add a context to the test for the jasmine show more informations about failed test

# Module 4
- Isn't possible create a component manually (new MyComponentName()), because this is make in the angular in your lifecycles
- In angular, all components belong to a module, in test environment it's the same thing, so to create a module that the component will be a part of, the **TestBed** was created
- **compileComponents**: By default angular finds the component template via a async request, so in tests, when called inside *beforeEach*, all tests will be run only after that request completes
    - This way are independent of the builder that you use, the angular use webpack, his make this inline,
    is not neccesary to do a request ajax to get the template and TS
- **ComponentFixture**: Is a wrapper that contains my component instance
- by default, the lifecycles are not invoked in tests enviroment, so are neccessary to run 
fixture.detectChanges() for init the components lifecycles.
- **done** param is used to indentify that the test have been done, if is not called it return an error

# Module 5
- By default, karma run the tests in chrome, for change that, install dependencies for other browsers, like 
*karma-firefox-launcher*(install for Dev) and edit **karma.conf.js**
