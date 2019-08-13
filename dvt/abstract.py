# -*- coding: utf-8 -*-
"""Abstract classes for running the Distant Viewing Toolkit.

The objects VisualInput, FrameAnnotator, and Aggregator are abstract classes.
They correspond to the method for extracting visual inputs from digitized
files, methods for extracting metadata from visual images, and methods for
aggregating the data across a collection. The toolkit provides many ready-made
implementions of these classes in order to solve common tasks.
"""

from abc import ABC, abstractmethod


class VisualInput(ABC):     # pragma: no cover
    """Base class for producing batches of visual input.

    Implementations in the toolkit provide inputs for video files and
    collections of still images. Users can further implement additional
    input types if needed.
    """

    @abstractmethod
    def __init__(self, **kwargs):
        """Creates a new input object, with possible keyword arguments.
        """
        return

    @abstractmethod
    def open_input(self):
        """Restart and initialize the input feed.

        This method is called once before passing data through a collection of
        annotators.
        """
        return

    @abstractmethod
    def next_batch(self):
        """Move forward one batch and return the current FrameBatch object.

        When called, this should return a FrameBatch object. It will be
        iteratively called until a batch is returned with the continue_read
        flag is set to false.
        """
        return

    @abstractmethod
    def get_metadata(self):
        """Provide metadata from the input connection.

        Returns an object that can be processed with the process_output_values
        utility function. The output is stored as a phantom metadata
        annotator.
        """
        return


class FrameAnnotator(ABC):   # pragma: no cover
    """Base class for annotating a batch of frames.

    Subclasses of this abstract class take subsets of frames, composed as
    FrameBatch objects, and return annotated data. Several common annotations
    are implemented in the toolkit. Users can create their own annotations
    by implementing the __init__ and annotate methods. Note that the annotator
    must contain a name attribute; the name is used as the key in the output
    annotation object.
    """

    name = "abstract"

    def __init__(self, **kwargs):
        """Create a new annotator object, with possible keyword arguments.
        """
        return

    @abstractmethod
    def annotate(self, batch):
        """Annotate a batch of frames and return the resulting annotations.

        This method contains the core functionality of an annotator. It takes
        a batch of frames and returns the annotated output in a format that
        can be processed by process_output_values.

        Args:
            batch (FrameBatch): A batch of images to annotate.

        Returns:
            The method should return item that can be processed by the
            utility function process_output_values.
        """
        return


class Aggregator(ABC):    # pragma: no cover
    """Base class for aggregating the output from a pipeline of processors.

    Aggregators take all of the information contained in a set of annotators
    and produce new metadata. The aggregators do not have access to the
    original visual material.

    Attributes:
        name (str): A description of the aggregator. Used as a key in the
            output data.
    """

    name = "abstract"

    def __init__(self, **kargs):
        """Create a new empty Aggregator.
        """
        return

    @abstractmethod
    def aggregate(self, ldframe, **kwargs):
        """Aggregate annotations.

        Args:
            ldframe (dict): A dictionary of data pased from a DataExtraction
                object.

        Returns:
            An object that can be processed by process_output_values.
        """
        return
