# SimpleAIF

SimpleAIF is a basic server for generating feedback based on the input code's similarity to the different forms of final solution. The repo has two main directories: 

1. ``preprocess`` is a Jupyter notebook for building the model
2. ``server`` is a very simple Python server

## Setup
Take the following steps to install SimpleWebIDE.

1. Clone the repo.
```bash
git clone https://github.ncsu.edu/HINTSLab/SimpleAIF.git
```
2. Install the dependencies.
```bash
pip install -r requirements.txt
```
It is suggested to run both parts in VS Code using a Conda environment. For the notebook in ``preprocess``, Jupyter can also be used, but since the server is in plain Python, VS Code may be a better option.

To start the server, run the ``main.py`` in the server directory.