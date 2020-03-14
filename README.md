# Final_Project

	Project Title: 
Machine Learning of the Equinor – Volve Production Data set 

	Source of the Dataset (Equinor Volve Dataset):
The Volve oil field is located in Block 15/9 in the southern part of the Norwegian North Sea, at a water depth of around 80m. It is situated approximately 200km west of Stavanger and 8km from the Sleipner Ost Field. The dataset contains information from 7 production wells in the Volve Field for a period from 2008- to 2014. This dataset is publically available on the Equinor Website.

	Scope of the Project:

1.	To understand the interdependencies of the different variables in the dataset (Eg; choke size, downhole pressure etc.) with the output (Eg; oil rate, gas rate and water rate and also their ratios like gas/oil and water/oil rate).
1.2.	To build a prediction model to determine downhole pressure of a test well.
2.1.	To understand the interdependencies of the different variables in the dataset (Eg; choke size, downhole pressure etc.) with the output (Eg; oil rate, gas rate and water rate and also their ratios like gas/oil and water/oil rate).


	Analysis:

1.	Downhole pressure is an important criterion of a well. Downhole gauge is an instrument that measures the downhole pressure of the well. However, the downhole gauges in each well constitute significant cost during full-field development or with passing time, sometimes could be worn- out / malfunction due to corrosion and gunk buildup or mechanical reasons. When the pressure gauge malfunctions, operators usually do not replace it due to the expense of the process and the lag in the hydrocarbon production that would mount significant costs. However, since it is not replaced, a well loses the record of the downhole pressure ever since it starts malfunctioning. To eliminate this, we would like to develop a model that would be able to predict the downhole pressure of the well. We would like to understand the dependencies of the different variables and what influences the downhole pressure most, so we can use those variables to predict the downhole pressure.


	Assumptions for Data Analysis:
1.	We have done analysis of different variables for the 7 wells in the dataset. Two of those wells did not have any production at all, so we dropped them. Among the five candidate wells, we found two clusters of wells considering production conditions such as locations of the wells in the field and production period. 2 wells are situated at the structural crest of the field and have been producing from 2008. The other 3 wells are situated on the flanks of the structure and has production from 2013-14 period.  All these well could be separated by a faults that may compartmentalize the reservoir (hydrocarbon tank). We have formed two clusters in our dataset based on this clustering, which is also supported by hypothesis testing of the Mean GOR and WOR of the two wells, they are significantly different. Also, during production period there are days of production shut-in probably for mechanical or pressure maintenances. Those days have been eliminated from this analysis.
	

	 Task Breakdown:
a.	Extraction and Understanding of the production and subsurface dataset. Analyze the various production parameters from each well and establish correlations and variances. (Pairwise plots and correlation plot- Heat map)
b.	Transforming the dataset – Performing some data wrangling and clean up. . 
c.	Design training and testing parameters/wells.Split data into testing and training datasets

d.	Performing Linear and Non-Linear Regression models .
	
e.d.	Basic Linear model with Regularization (Lasso shrinkage).

f.e.	Residual Plotting.

	Model Tuning - .
f.	Grid SearchCV.
	
g.	Creating a visualization dashboard to predict the downhole pressure and choke size for certain given input parameters, with an accuracy of our models. 

h.a.	Model Tuning.



