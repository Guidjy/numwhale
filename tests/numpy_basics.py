import numpy as np
import math

"""The NumPy library contains multidimensional array data structures, such as the homogeneous, N-dimensional ndarray, 
and a large library of functions that operate efficiently on these data structures.

A three-dimensional array would be like a set of tables, perhaps stacked as though they were printed on separate pages. 
In NumPy, this idea is generalized to an arbitrary number of dimensions, and so the fundamental array class is called 
ndarray: it represents an “N-dimensional array”.
Most NumPy arrays have some restrictions. For instance:
- All elements of the array must be of the same type of data.
- Once created, the total size of the array can’t change.
- The shape must be “rectangular”, not “jagged”; e.g., each row of a two-dimensional array must have the same number of columns."""

##### Array fundamentals


### initializing an array

a = np.array([1, 2, 3, 4, 5, 6])
print(a)

### accessing elements

# accessing an element
print(a[0])
# mutating
a[0] = 10
print(a[0])

### slicing

print(a[:3])
# 0-0: slice indexing an array returns a "view": an object that refers to the data in the original array.
# The original array can be mutated using this view
b = a[:3]
print(b)
b[0] = 40
print(a)

### 2+ dimensional arrays

# Two- and higher-dimensional arrays can be initialized from nested Python sequences
a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
print(a)
print(a[1, 3])

"""In NumPy, a dimension of an array is sometimes referred to as an “axis”. This terminology may be useful to disambiguate 
between the dimensionality of an array and the dimensionality of the data represented by the array. For instance, the array 'a' 
could represent three points, each lying within a four-dimensional space, but 'a' has only two “axes”."""



##### Array attributes

# number of dimensions: The number of dimensions of an array is contained in the ndim attribute.
print(a.ndim)
# The shape of an array is a tuple of non-negative integers that specify the number of elements along each dimension.
print(a.shape)
print(len(a.shape) == a.ndim)  # True
# size of an array: The fixed, total number of elements in array is contained in the size attribute.
print(a.size) # 12
print(a.size == math.prod(a.shape)) # True
# data type of an array: Arrays are typically “homogeneous”, meaning that they contain elements of only one “data type”. 
# The data type is recorded in the dtype attribute.
print(a.dtype) # int64



##### How to create a basic array

 
# Besides creating an array from a sequence of elements, you can easily create an array filled with 0’s, 1's or even an empty array
print(np.zeros(2))
print(np.ones(2))
print(np.empty(2)) # may vary
# you can create an array with a range of elements
print(np.arange(4))
# or even an array that contains a range of evenly spaced intervals
print(np.arange(2, 9, 2))
# you can use np.linspace() to create an array with values that are spaced linearly in a specified interval
print(np.linspace(0, 10, num=5))
# specifying your data type: While the default data type is floating point (np.float64), you can explicitly
# specify which data type you want using the dtype keyword.
x = np.ones(2, dtype=np.int64)
print(x.dtype)



##### Adding, removing, and sorting elements


### sorting: Sorting an array is simple with np.sort(). You can specify the axis, kind, and order when you call the function.
arr = np.array([2, 1, 5, 3, 7, 4, 6, 8])
print(np.sort(arr))
# In addition to sort, which returns a sorted copy of an array, you can use:
# - argsort, which is an indirect sort along a specified axis,
# - lexsort, which is an indirect stable sort on multiple keys,
# - searchsorted, which will find elements in a sorted array, and
# - partition, which is a partial sort.

### concatenating
# ex1:
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])
print(np.concatenate((a, b)))
# ex2:
x = np.array([[1, 2], [3, 4]])
y = np.array([[5, 6]])
print(np.concatenate((x, y), axis=0))

### removing: In order to remove elements from an array, it’s simple to use indexing to select the elements that you want to keep. ( 0-0 )