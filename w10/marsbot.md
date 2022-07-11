# marsbot Technical Challenge

A model of robots on a rectangular planet.

This example is based on a real technical test Robin did for a previous role. [Robin's solution to the marsbot challenge](https://github.com/rjkerrison/marsbot) is available on Github.

The challenge is designed to be approachable for developers at any level,
and to allow them to showcase what they think good code looks like.
As well as looking at your final code and the comments you make,
senior developers reviewing your repository can look at your commit history to see how you broke the task down.

## Background

Imagine you've got a rectangular planet, and some robots which you want to explore that planet.

Robots can turn to the left, to the right, or move forward.

As a precautionary measure, any robot which falls off the planet leaves behind a signal to prevent any other robots from falling off at the same point.

This program models this world for you.

## Technical requirements

Your task: create a programme which takes in `instructions.txt` and outputs the result of a scenario.

You can complete the challenge in any language you like, as long as it can run in command-line and it reads instructions from a text file.

You must deploy your solution in a publicly hosted git repository.
Provide a README with instructions on how to run your program.

### Format

The format of the instructions are like the following:

```
10 10
3 2 N
FFLF
5 2 W
RFLFFFLFRF
3 6 E
LFFRFLFRF
```

The first line determines the size of the planet.

The lines after that define robots, with an initial position and orientation, followed by a series of commands.

`3 2 N` means a robot is at the location _(3,2)_ on the planet, and is looking North.

In the series of commands:

- `F` means _move forwards_
- 'L' means _rotate a quarter-turn anticlockwise_
- 'R' means _rotate a quarter-turn clockwise_

It will therefore move forwards to _(3,3)_ when given the first `F` command,
then forwards again (second `F`),
then turn anticlockwise (`L`) to face west and then step forwards again (`F`).
It will arrive at `2 4 W`.

### Limits

So the program doesn't run forever, you must impose some limits.

An example of these limits will be `config.json`, which looks like

```json
{
  "maxCommands": 100,
  "maxNorth": 50,
  "maxEast": 50
}
```

With these limits, you should **silently correct data**, rather than failing loudly.
That means you must ensure the following behaviours:

- if you give a command string longer than the value of `maxCommands`, it will be shortened to the length `maxCommands`
- if you give a grid height greater than `maxNorth`, `maxNorth` will be taken to be the height instead
- if you give a grid width greater than `maxEast`, `maxEast` will be taken to the height instead

As a further precaution, robots who are placed outside the grid must be instead placed on the nearest edge.
As an example, with the configuration above, a robot placed using `55 43 S` will instead be placed at `50 43 S` to begin.
