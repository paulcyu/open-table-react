# Answers to Technical Questions

## How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

Many hours spread out over the course of several nights.  Due to time constraints and unfamiliarity to the framework, the solution does not include Redux, so that's an obvious candidate for addition.  Other things to add:
- refactor generic components
- explore conventional patterns from the community
- more tests
- abstraction of content for localization
- better error handling

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

In JS? Template literals, fat arrow functions, Promises, and default parameters are old by now, but continue to impact refactor work in existing code base.

## How would you track down a performance issue in production? Have you ever had to do this?

Have not really had to do this with production, but I would probably start with a developer tool (chrome, firefox) to track network requests timing and spot unnecessary calls or opportunities to re-order the sequence of calls / defer to later.  Turn on the profiler and check snapshots over time to spot memory issues.   


## How would you improve the API that you just used?
Maybe add localization

## Please describe yourself using JSON.
```
{
	"name": "paul",
	"dob": {
		"year": "1984",
		"month": "3",
		"day": "15"
	},
	"countryOfOrigin": "Hong Kong",
	"height":"172",
	"weight": "how-rude",
	"partners": [
	  	{ ... }
	],
	"children": [
		{ ... },
		{ ... }
	]
}
```