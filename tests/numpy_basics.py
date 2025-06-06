# %%
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import math

# tutorial: https://numpy.org/devdocs/user/absolute_beginners.html

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



##### How do you know the shape and size of an array?

# - ndarray.ndim will tell you the number of axes, or dimensions, of the array.
# - ndarray.size will tell you the total number of elements of the array. This is the product of the elements of the array’s shape.
# - ndarray.shape will display a tuple of integers that indicate the number of elements stored along each dimension of the array. 
#   If, for example, you have a 2-D array with 2 rows and 3 columns, the shape of your array is (2, 3).

array_example = np.array([[[0, 1, 2, 3],
                           [4, 5, 6, 7]],
                          [[0, 1, 2, 3],
                           [4, 5, 6, 7]],
                          [[0 ,1 ,2, 3],
                           [4, 5, 6, 7]]])
print(array_example.ndim)
print(array_example.size)
print(array_example.shape)



##### Reshaping arrays


# Using arr.reshape() will give a new shape to an array without changing the data. 
# 0-0: Just remember that when you use the reshape method, the array you want to produce needs to have the same number of elements as the original array.
a = np.arange(6)
print(a)
b = a.reshape(3, 2)
print(b)



##### How to add a new axis to an array


### You can use np.newaxis and np.expand_dims to increase the dimensions of your existing array.

# Using np.newaxis will increase the dimensions of your array by one dimension when used once. 
a = np.array([1, 2, 3, 4, 5, 6])
print(a.shape)
a2 = a[np.newaxis, :]
print(a2.shape)
# 0-0: You can explicitly convert a 1D array to either a row vector or a column vector using np.newaxis

# you can also expand an array by inserting a new axis at a specified position with np.expand_dims
a = np.array([1, 2, 3, 4, 5, 6])
print(a.shape)
b = np.expand_dims(a, axis=1)
print(b.shape)
c = np.expand_dims(a, axis=0)
print(c.shape)



##### Indexing and slicing


# You can index and slice NumPy arrays in the same ways you can slice Python lists.

# If you want to select values from your array that fulfill certain conditions, it’s straightforward with NumPy.
a = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
print(a[a < 5])  # prints all of the values in the array that are less than 5.
five_up = five_up = (a > 5) | (a == 5)
print(a[five_up])



##### How to create an array from existing data

# You can easily create a new array from a section of an existing array.
a = np.array([1,  2,  3,  4,  5,  6,  7,  8,  9, 10])
arr1 = a[3:8]
print(arr1)

# You can also stack two existing arrays, both vertically and horizontally.
a1 = np.array([[1, 1],
               [2, 2]])
a2 = np.array([[3, 3],
               [4, 4]])
# stacking vertically
a1_a2 = np.vstack((a1, a2))
print(a1_a2)
# stacking horizontally
a1_a2 = np.hstack((a1, a2))
print(a1_a2)




##### basic array operations

data = np.array([1, 2])
ones = np.ones(2, dtype=int)
print(data + ones)
print(data - ones)
print(data * data)
print(data / data)

# sum of the elements in an array
a = np.array([1, 2, 3, 4])
print(a.sum())

# To add the rows or the columns in a 2D array, you would specify the axis.
b = np.array([[1, 1], [2, 2]])
print(b.sum(axis=0))  # row
print(b.sum(axis=1))  # column



##### Broadcasting (operation between a vector and a scalar or between arrays of two different sizes)

data = np.array([1.0, 2.0])
print(data * 1.6)
# 0-0: The dimensions of your array must be compatible, for example, when the dimensions of both arrays are equal 
# or when one of them is 1. If the dimensions are not compatible, you will get a ValueError.



##### More useful array operations

# NumPy also performs aggregation functions. In addition to min, max, and sum, you can easily run mean to get the average, 
# prod to get the result of multiplying the elements together, std to get the standard deviation, and more.



##### Creating matrices

# you can pass Python lists of lists to create a 2-D array (or “matrix”) to represent them in NumPy.
data = np.array([[1, 2], [3, 4], [5, 6]])
print(data)



##### Working with mathematical formulas

# mean square error formular: error = 1/n * Σ(Y_predictioni - Yi)²
predictions = np.ones(3, dtype=int)
labels = np.arange(1, 4)
print(predictions)
print(labels)
error = (1/predictions.size) * np.sum(np.square(predictions - labels))



##### importing and exporting a CSV



##### plotting arrays with matplotlib

# %%
import numpy as np
import matplotlib.pyplot as plt

a = np.array([2, 1, 5, 7, 4, 6, 8, 14, 10, 9, 18, 20, 22])
plt.plot(a)
plt.show()

x = np.linspace(0, 5, 20)
y = np.linspace(0, 10, 20)
plt.plot(x, y, 'purple') # line
plt.plot(x, y, 'o')      # dots

fig = plt.figure()
ax = fig.add_subplot(projection='3d')
X = np.arange(-5, 5, 0.15)
Y = np.arange(-5, 5, 0.15)
X, Y = np.meshgrid(X, Y)
R = np.sqrt(X**2 + Y**2)
Z = np.sin(R)
ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap='viridis')

# %%
