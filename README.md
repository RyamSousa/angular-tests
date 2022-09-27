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
