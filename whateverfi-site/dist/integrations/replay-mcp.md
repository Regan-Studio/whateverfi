# Replay MCP

Replay MCP lets agents inspect time-travel browser recordings, including console output, exceptions, network activity, source code, React state, performance profiles, screenshots, and execution points.

Category: Developer. Connect from any WhatEverFi bot at https://whateverfi.com/integrations/replay-mcp/.

## Actions

- **Annotations** (read-only): Inspect the annotations in a recording.
- **Consolemessages** (read-only): Show console API messages (console.log, console.warn, console.error, etc.).
- **Describepoint** (read-only): Describes the application state at a code execution point.
- **Evaluate**: Evaluates an expression at a code execution point.
- **Executiondelay** (read-only): Computes execution delays for functions based on their source length and the delay before the first breakpoint in each function executes.
- **Getpointcomponent** (read-only): Gets the React component being rendered at a code execution point.
- **Getpointlink** (read-only): Generates an app.replay.io link for users to inspect a given execution point.
- **Getstack** (read-only): Gets the call stack at a code execution point.
- **Inspectelement** (read-only): Get size, layout, ancestry and render point information for a DOM element.
- **Listsources** (read-only): List the sources in the recording.
- **Localstorage** (read-only): Describe all the accesses made to localStorage.
- **Logpoint**: Evaluates an expression at breakpoint hits for a given path and line number.
- **Networkrequest** (read-only): Analyze network requests in the recording.
- **Playwrightsteps** (read-only): Show all steps taken by Playwright in the recording.
- **Profilegraph** (read-only): Profiles dependency graph entry execution between two points in a recording.
- **Profilesampling** (read-only): Profiles the native C++ replay engine using stack sampling between two execution points.
- **Profilestatements** (read-only): Profiles JS statement execution between two points in a recording.
- **Reactcomponenttree** (read-only): Get the structure of the committed/mounted React component tree at a point in time.
- **Reactexception** (read-only): Describe any exceptions thrown which caused React to unmount.
- **Reactperformanceinsights** (read-only): Run all deterministic React performance checks on a recording and return prioritized findings.
- **Reactrenders** (read-only): Analyze React renders in a recording.
- **Readsource** (read-only): Read up to 50 lines of code centered around the given line and see what statements executed.
- **Recordingoverview** (read-only): Provides a comprehensive overview of a recording.
- **Reduxactions** (read-only): Analyze Redux actions in a recording.
- **Screenshot** (read-only): Lists all screenshot timestamps in the recording, or fetches a screenshot at a given timestamp.
- **Searchsources** (read-only): Search the sources in the recording and see which statements executed.
- **Tanstackqueries** (read-only): Analyze TanStack Query (React Query) cache events in a recording.
- **Uncaughtexception** (read-only): Describe uncaught exceptions and unhandled promise rejections (runtime errors not caught by try/catch).
- **Userinteractions** (read-only): Show all user interactions (clicks and key presses) in the recording.
- **Warmrecording**: Starts processing a recording if needed and reports its status.
- **Websocketmessages** (read-only): Inspect the WebSocket connections in a recording and the messages sent and received on them.
- **Zustandstores** (read-only): Analyze Zustand stores in a recording.
