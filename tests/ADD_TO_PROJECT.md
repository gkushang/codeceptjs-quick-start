
## Add CodeceptJS to your existing Project

### Step 1: Clone the repository

```bash
    git clone git@github.com:gkushang/codeceptjs-quick-start.git
    
    cd codeceptjs-quick-start
```

### Step 2: Copy the existing setup

```bash
    cp -a tests/acceptance/ <path_to_your_desired_acceptance_folder>
    
    cp codecept.conf.js <path_to_root_of_your_desired_project_or_your_monorepo> 

    cd <to_your_desired_project>
    
    yarn add @wdio/selenium-standalone-service allure-commandline codeceptjs codeceptjs-selenium debug faker protractor rimraf should webdriverio -D

```

Update the following PATH's with your actual paths,

```bash

    const DEFAULT_HOST = <your_host>;
    const RELATIVE_PATH = <your_relative_path_where_acceptance_folder_exists>

```

### Step 3: Test the setup

```bash
    
    cd <to_your_desired_project>
    ./node_modules/.bin/codeceptjs run --config=<path_to_codeceptjs.conf.js_file>
```



